# Copyright (c) 2022, 2023 Oracle and/or its affiliates.
#
# Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
#
# NODE DOCKERFILES PROJECT
# --------------------------
# This is the Dockerfile for Node 18.20.2 and Nginx
#
# REQUIRED FILES TO BUILD THIS IMAGE
# ----------------------------------
# This dockerfile will download a copy of Node and Ngnix
#
# It will use either x64 or aarch64 depending on the target platform
#
# HOW TO BUILD THIS IMAGE
# -----------------------
# Run:
#      $ docker build -t nxt-ui-users .
#
#      $ docker run -p 4200:4200 nxt-ui-users
#
# The builder image will be used to uncompress the tar.gz file with the Java Runtime.

# Falta preguntar esta variable viene desde el contenedor de aws

# FROM 767397882540.dkr.ecr.us-east-1.amazonaws.com/node
FROM ENVIROMENT_ACCOUNT.dkr.ecr.us-east-1.amazonaws.com/node AS build-env
# pruebas locales
# FROM node:18-alpine

# Set principal work directory
WORKDIR /usr/src/app

# Copy all files from the build context
COPY . .

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Remove specific dependencies and lock file
RUN sed -i '/SmartPaymentServices\/nxt-ui-library/d' package.json
RUN rm -rf node_modules package-lock.json

# Set the npm registry
RUN npm config set registry https://registry.npmjs.org

# Install all dependencies
RUN npm install
RUN npm config set registry https://npm.pkg.github.com/
RUN npm install @smartpaymentservices/nxt-ui-library --legacy-peer-deps
RUN npm config set registry https://registry.npmjs.org/

# RUN npm run build:qa
RUN ng build --configuration=dev --base-href=/

RUN ls -la

# Get a fresh version of nginx for the final image
FROM ENVIROMENT_ACCOUNT.dkr.ecr.us-east-1.amazonaws.com/nginx
# FROM nginx:alpine

# Copy compile data
COPY --from=build-env /usr/src/app/dist/nxt-ui-users/browser /usr/share/nginx/html

# Copy nginx configuration
COPY --from=build-env /usr/src/app/nginx.conf /etc/nginx/nginx.conf

# Copy certs for CA
COPY --from=build-env /usr/src/app/ca /etc/nginx/certs

CMD ["nginx", "-g", "daemon off;"]
