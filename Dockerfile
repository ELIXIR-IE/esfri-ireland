# Dev-mode image for local live-reloading of the IENN site.
# Not used for production — GitHub Actions builds the static site directly
# with `npm run build` (see .github/workflows/deploy.yml).
FROM node:22-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 4321

CMD ["sh", "-c", "rm -f .astro/dev.json && npm run dev -- --host 0.0.0.0"]
