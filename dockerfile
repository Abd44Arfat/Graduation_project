FROM node:12
COPY app.js /app.js
WORKDIR /app.js
RUN npm install
CMD ["node", "/app.js"]
