FROM node:12
RUN npm install
CMD ["node", "/app.js"]
