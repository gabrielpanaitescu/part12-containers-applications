FROM node:20 AS base
WORKDIR /usr/src/app

FROM base AS test
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev
COPY . .
RUN npm run test

FROM test AS prod
COPY --from=test /usr/src/app /usr/src/app
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
RUN npm run build

FROM nginx:1.25-alpine
COPY --from=prod /usr/src/app/dist /usr/share/nginx/html

