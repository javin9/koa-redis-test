FROM node
ADD . /app/
WORKDIR /app
RUN npm i 
EXPOSE 8080
CMD ["npm","start"]