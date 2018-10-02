FROM node:latest
ENV http_proxy http://gate-zrh-os.swissre.com:8080
ENV https_proxy http://gate-zrh-os.swissre.com:8080
ENV no_proxy localhost,.swissre.com,.swissreapps-np.com,.swissreapps.com,.gwpnet.com
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD [ "npm", "start" ]