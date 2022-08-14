#Stage 1
FROM node:16.16.0-alpine3.15 as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

#Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/testing-curso-Fernando-Herrera /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80

