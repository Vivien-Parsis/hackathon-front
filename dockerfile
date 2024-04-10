FROM node:21-alpine
RUN mkdir /hackathon_front
COPY . ./hackathon_front
WORKDIR /hackathon_front
RUN npm i
EXPOSE 8000
CMD ["npm","run","dev"]