FROM node:16-alpine

WORKDIR "/app"
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4544
CMD ["node", "server.js"]