FROM node:16-slim

WORKDIR /app

EXPOSE 3000

ENV MOCK_LENGTH=100
ENV MOCK_DELAY=1000

RUN npm install -g json-server

COPY . .

RUN npm install

CMD [ "json-server", "--delay=$MOCK_DELAY", "--host=0.0.0.0", "--port=3000", "src/index.js" ]