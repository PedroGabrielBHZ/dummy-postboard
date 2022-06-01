# specify base image
FROM node:alpine

# specify the working directory
WORKDIR /app

# copy package to current directory
COPY package.json .

# install dependencies
RUN npm install

# copy over the remaining source code
COPY . .

# set initial command to start the app
CMD ["npm", "start"]