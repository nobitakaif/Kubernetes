FROM oven/bun:1 AS base

WORKDIR /app

COPY package.json ./
RUN bun install
COPY . .

EXPOSE 8000
CMD ["bun", "index.ts"]

