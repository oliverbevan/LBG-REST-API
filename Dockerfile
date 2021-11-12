FROM node
COPY . .
EXPOSE 8080
RUN npm i
ENTRYPOINT ["npm","start"]

