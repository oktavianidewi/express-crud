FROM node:7

# use this directory to store files, run npm, and launch our app
WORKDIR /app

# copy application to /app directory, install dependecies. 
# If you add the package.json first and run npm install later, Docker won't have to install the dependencies again if you change package.json
COPY package.json /app
RUN npm install
COPY . /app

# what should be executed when the docker image is launched. 
CMD node index.js

# expose port 8081 tok the outside once the container has launched
EXPOSE 8081