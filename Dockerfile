FROM oven/bun:1.3.4-slim

WORKDIR /app

COPY /public ./public

COPY .next/standalone ./

COPY .next/static ./.next/static

ENV PORT=3000
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0

RUN groupadd -r app && useradd -r -g app -d /home/app -s /sbin/nologin app \
	&& mkdir -p /home/app \
	&& chown -R app:app /app

USER app

HEALTHCHECK CMD --fail http://localhost:${PORT}/api/health || exit 1

EXPOSE ${PORT}

ENTRYPOINT [ "bun", "run", "server.js" ]