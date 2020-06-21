FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN npm install

FROM mhart/alpine-node
RUN npm install -g json-server
WORKDIR /app
COPY --from=builder /app .
CMD ["sh", "-c", "npm run start-db & npm start"]