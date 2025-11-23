require('dotenv').config();
const http = require('http');
const app = require('./src/app');
const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`ArgueBet backend listening on port ${PORT} (env: ${process.env.NODE_ENV})`);
});
