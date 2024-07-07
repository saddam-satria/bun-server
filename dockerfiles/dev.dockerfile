FROM oven/bun:latest

WORKDIR /bun-server

COPY package.json ./

COPY bun.lockb ./

RUN bun install

COPY src ./src

COPY tsconfig.json ./

COPY tsconfig.build.json ./

COPY public ./public

RUN bun run build

CMD [ "bun" , "run", "dev" ]