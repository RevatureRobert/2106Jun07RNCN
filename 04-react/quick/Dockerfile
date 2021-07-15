#
FROM node:14-alpine
#
EXPOSE 3000
#
LABEL MAINTAINER=connellrobert
#
LABEL email=robert.connell@revature.com
#
LABEL HOMEPAGE=https://github.com/RevatureRobert/2106RNCN
#
RUN mkdir /app
#
COPY . /app
#
WORKDIR /app
#
ENV NODE_ENV = prod
#
RUN npm install
#
ENTRYPOINT ["npm", "start"]