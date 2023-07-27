FROM node:18.17.0-bullseye-slim
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
ENV TZ=Asia/Taipei
ENV NODE_ENV=production
EXPOSE 3000
CMD [ "npm", "run", "start" ]