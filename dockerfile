FROM node:20.12.2-alpine3.19
RUN addgroup api && adduser -S -G api api
USER api
WORKDIR /app/
COPY --chown=api package*.json .
RUN npm install
COPY --chown=api . .
EXPOSE 4000
CMD ["npm", "run", "dev"]