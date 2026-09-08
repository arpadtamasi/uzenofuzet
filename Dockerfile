# Build and run the hosted KRÉTA MCP server on Cloud Run.
#
# The build context is the repository root, not `server/`: the hosted server
# depends on the `@uzenofuzet/core` workspace, so the container has to install
# from the root lockfile and build both packages. `npm ci` at the root is what
# creates node_modules/@uzenofuzet/core as a link to ./core.
FROM node:22-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
COPY core/package.json ./core/
COPY server/package.json ./server/
COPY desktop/package.json ./desktop/
RUN npm ci
COPY core ./core
COPY server/tsconfig.json server/tsconfig.build.json ./server/
COPY server/src ./server/src
RUN npm run build -w @uzenofuzet/core && npm run build:server -w uzenofuzet-server

FROM node:22-slim
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-lock.json ./
COPY core/package.json ./core/
COPY server/package.json ./server/
COPY desktop/package.json ./desktop/
RUN npm ci --omit=dev --workspace=uzenofuzet-server --include-workspace-root \
    && npm cache clean --force
# Only the compiled output ships; `core` keeps its package.json so its
# `exports` map still resolves the linked dependency.
COPY --from=build /app/core/dist ./core/dist
COPY --from=build /app/server/dist ./server/dist
WORKDIR /app/server
# Cloud Run sets PORT; the default matches its own default.
ENV PORT=8080
EXPOSE 8080
USER node
CMD ["node", "dist/index.js"]
