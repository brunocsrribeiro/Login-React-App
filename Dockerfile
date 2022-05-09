FROM node

COPY . /app

WORKDIR /app

RUN npm install

ENV PORT=80
ENV SERVER_ENV=test

EXPOSE 80

CMD ["npm", "start"]
