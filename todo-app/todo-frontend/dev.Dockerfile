FROM node:20
WORKDIR /usr/src/app
COPY . . 
RUN npm install
# ENV VITE_BACKEND_URL="http://localhost:3000" 
# ^ moved into todo-app/docker-compose.dev.yml, that combines FE and BE into a single development environment
CMD ["npm", "run", "dev", "--", "--host"]