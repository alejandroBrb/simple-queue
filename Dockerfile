# FROM node:16-alpine
FROM node:16

# Expose port 3000 for the api
EXPOSE 3000

WORKDIR /app

# RUN apk update && apk add chromium 
RUN apt-get update

# Install nodemon globally inside the container
RUN npm install -g nodemon

# Copy files to app directory
COPY . /app

RUN npm install;

# Define run script
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]