FROM node:20
WORKDIR /usr/src/app
COPY . .
RUN npm install
ENV DEBUG=todo-express-backend:*
CMD npm run dev

