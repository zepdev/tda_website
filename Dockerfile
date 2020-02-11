FROM node:11.15.0-alpine as react-build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN yarn --silent
RUN yarn build

# Stage 2 - the production environment

FROM nginx

COPY --from=react-build /app/build /usr/share/nginx/html
COPY --from=react-build /app/default.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]
