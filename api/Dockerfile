FROM node:18.12.0-alpine

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 3001

CMD ["npm","run","start"]
