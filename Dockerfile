FROM node:13.12.0-alpine

WORKDIR /taxes-app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

EXPOSE 3000 80
CMD ["npm", "start"]