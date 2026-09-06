/**
 * The hosted MCP server: read-only KRÉTA and Google Classroom tools served
 * over streamable HTTP against a sealed user session.
 *
 * The KRÉTA half is the shared tool table from `@uzenofuzet/core`, wired to
 * this deployment's credential store — encrypted connections in the verified
 * parent's private profile. The Classroom half is hosted-only: it needs a
 * Google OAuth client, which a distributable desktop build cannot keep
 * secret.
 *
 * The tool surface is deliberately a fixed table of student GET endpoints.
 * There is no "call any path" tool, no write verb, and no attachment
 * download — what holds that line is this list, not a permission grant, so
 * adding to it is a product decision rather than a refactor.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
  childArg,
  KRETA_TOOL_INSTRUCTIONS,
  limitArg,
  MAX_ITEMS,
  pack,
  READ_ONLY,
  registerKretaTools,
  requireUid,
  ToolError,
  validateLimit,
  type KretaBackend,
} from "@uzenofuzet/core/mcp";
import type { SealedChild, SealedSession } from "../oauth/types.js";
import { createClassroomClient, createClient, resolveChild, type ClientFactoryDeps } from "./context.js";
import { ClassroomApiError, type ClassroomClient } from "../classroom/client.js";

export interface BuildServerOptions extends ClientFactoryDeps {
  session: SealedSession;
}

export function buildMcpServer(options: BuildServerOptions): McpServer {
  const { session, ...factoryDeps } = options;

  const server = new McpServer(
    { name: "kreta", version: "0.1.0" },
    {
      instructions:
        KRETA_TOOL_INSTRUCTIONS +
        " A Google Classroom-adatokhoz sincs módosító vagy törlő művelet.",
    },
  );

  registerKretaTools<SealedChild>(server, {
    children: () => session.children,
    clientFor: (child) => createClient(session, child, factoryDeps),
    // What a parent is told about this deployment: the password was never
    // stored, and the token pair sits encrypted in their own profile.
    describeConnection: () => ({
      credential: "refresh_token",
      password_stored: false,
      token_storage: "encrypted_in_profile_store",
      connected_at: new Date(session.connectedAt).toISOString(),
    }),
  } satisfies KretaBackend<SealedChild>);

  const classroomTool = (
    name: string,
    description: string,
    schema: z.ZodRawShape,
    handler: (args: Record<string, unknown>, client: ClassroomClient) => Promise<unknown>,
  ): void => {
    server.registerTool(
      name,
      { description, inputSchema: schema, annotations: { ...READ_ONLY, title: description } },
      async (args: Record<string, unknown>) => {
        try {
          const child = resolveChild(session, args.child as string | undefined);
          const client = await createClassroomClient(session, child, factoryDeps);
          const payload = await handler(args, client);
          return { content: [{ type: "text", text: JSON.stringify(payload) }] };
        } catch (error) {
          const message = error instanceof ToolError || error instanceof ClassroomApiError
            ? error.message
            : "Váratlan hiba a Google Classroom-lekérdezés közben.";
          return { isError: true, content: [{ type: "text", text: message }] };
        }
      },
    );
  };

  const classroomId = (value: unknown, label: string): string =>
    encodeURIComponent(requireUid(String(value ?? ""), label));

  const classroomList = async (
    client: ClassroomClient,
    path: string,
    responseKey: string,
    params: Record<string, string | number | undefined>,
    limit: number,
  ) => pack(await client.list(path, responseKey, params, Math.min(MAX_ITEMS + 1, limit + 1)), limit);

  classroomTool(
    "classroom_courses",
    "A gyerek Google Classroom-kurzusainak lekérése.",
    {
      active_only: z.boolean().default(true).describe("Alapból csak az aktív kurzusok jelennek meg."),
      limit: limitArg(100),
      child: childArg,
    },
    async (args, client) => classroomList(
      client,
      "courses",
      "courses",
      {
        studentId: "me",
        ...(args.active_only ? { courseStates: "ACTIVE" } : {}),
        fields: "nextPageToken,courses(id,name,section,room,descriptionHeading,courseState,alternateLink)",
      },
      validateLimit(args.limit as number),
    ),
  );

  classroomTool(
    "classroom_coursework",
    "Egy Google Classroom-kurzus kiadott feladatainak lekérése.",
    {
      course_id: z.string().describe("A kurzus azonosítója a classroom_courses válaszából."),
      limit: limitArg(100),
      child: childArg,
    },
    async (args, client) => classroomList(
      client,
      `courses/${classroomId(args.course_id, "Classroom-kurzusazonosító")}/courseWork`,
      "courseWork",
      {
        courseWorkStates: "PUBLISHED",
        orderBy: "dueDate asc,updateTime desc",
        fields: "nextPageToken,courseWork(id,title,description,materials,state,alternateLink,creationTime,updateTime,dueDate,dueTime,maxPoints,topicId,workType,scheduledTime)",
      },
      validateLimit(args.limit as number),
    ),
  );

  classroomTool(
    "classroom_submissions",
    "A gyerek beadási állapotainak és jegyeinek lekérése egy Google Classroom-kurzusban.",
    {
      course_id: z.string().describe("A kurzus azonosítója a classroom_courses válaszából."),
      course_work_id: z.string().default("-").describe("Feladatazonosító; '-' esetén a kurzus összes feladata."),
      limit: limitArg(100),
      child: childArg,
    },
    async (args, client) => classroomList(
      client,
      `courses/${classroomId(args.course_id, "Classroom-kurzusazonosító")}/courseWork/${classroomId(args.course_work_id, "Classroom-feladatazonosító")}/studentSubmissions`,
      "studentSubmissions",
      {
        userId: "me",
        fields: "nextPageToken,studentSubmissions(id,courseId,courseWorkId,state,late,assignedGrade,draftGrade,alternateLink,creationTime,updateTime)",
      },
      validateLimit(args.limit as number),
    ),
  );

  classroomTool(
    "classroom_announcements",
    "Egy Google Classroom-kurzus közleményeinek lekérése.",
    {
      course_id: z.string().describe("A kurzus azonosítója a classroom_courses válaszából."),
      limit: limitArg(100),
      child: childArg,
    },
    async (args, client) => classroomList(
      client,
      `courses/${classroomId(args.course_id, "Classroom-kurzusazonosító")}/announcements`,
      "announcements",
      {
        announcementStates: "PUBLISHED",
        orderBy: "updateTime desc",
        fields: "nextPageToken,announcements(id,text,state,alternateLink,creationTime,updateTime,scheduledTime)",
      },
      validateLimit(args.limit as number),
    ),
  );

  classroomTool(
    "classroom_materials",
    "Egy Google Classroom-kurzus tananyagainak lekérése.",
    {
      course_id: z.string().describe("A kurzus azonosítója a classroom_courses válaszából."),
      limit: limitArg(100),
      child: childArg,
    },
    async (args, client) => classroomList(
      client,
      `courses/${classroomId(args.course_id, "Classroom-kurzusazonosító")}/courseWorkMaterials`,
      "courseWorkMaterial",
      {
        courseWorkMaterialStates: "PUBLISHED",
        orderBy: "updateTime desc",
        fields: "nextPageToken,courseWorkMaterial(id,title,description,materials,state,alternateLink,creationTime,updateTime,scheduledTime,topicId)",
      },
      validateLimit(args.limit as number),
    ),
  );

  return server;
}
