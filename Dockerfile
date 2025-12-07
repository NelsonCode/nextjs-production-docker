# syntax=docker/dockerfile:1
# check=error=true

FROM oven/bun:1.3.3-slim

WORKDIR /app

COPY bun.lock ./

COPY /public ./public

COPY .next/standalone ./

COPY .next/static ./.next/static

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create a non-root user and give ownership of the app directory to it.
# then change ownership and switch to the unprivileged user for runtime.
RUN groupadd -r app && useradd -r -g app -d /home/app -s /sbin/nologin app \
	&& mkdir -p /home/app \
	&& chown -R app:app /app

USER app

HEALTHCHECK CMD curl --fail http://localhost:${PORT}/api/health

EXPOSE ${PORT}

ENTRYPOINT ["bun", "run", "server.js"]