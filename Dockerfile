FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm config set legacy-peer-deps true \
    && npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
