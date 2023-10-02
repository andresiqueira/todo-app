FROM node:16 as node-builder
WORKDIR /modules
COPY package.json .
# RUN apt-get update
RUN npm install

FROM node:16
WORKDIR /app
COPY --from=node-builder /modules .
COPY . .
CMD npm run dev
EXPOSE 80