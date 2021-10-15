# base image
FROM node

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY ["server/package.json", "server/package-lock.json*", "./"]
RUN npm install

COPY . .
# start app
CMD ["node", "server.js"]