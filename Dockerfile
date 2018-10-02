FROM node:latest
ENV http_proxy http://gate-zrh-os.swissre.com:8080
ENV https_proxy http://gate-zrh-os.swissre.com:8080
ENV no_proxy localhost,.swissre.com,.swissreapps-np.com,.swissreapps.com,.gwpnet.com
WORKDIR /usr/src/app
COPY package*.json npm-chain.pem ./
RUN npm config set registry https://artifact.swissre.com/api/npm/npm && \
    npm config set save-exact true && \
    npm config set strict-ssl true && \
    npm config set cafile ./npm-chain.pem && \
    npm install
COPY . .
EXPOSE 4200
CMD [ "npm", "start" ]