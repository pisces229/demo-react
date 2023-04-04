const jsonServer = require("json-server");
const path = require("path");
const fs = require("fs");
const http = require("http");
const https = require("https");

const server = jsonServer.create();
const middlewares = jsonServer.defaults({
  noCors: false,
  readOnly: true,
});
server.use(middlewares);
server.use((req, res, next) => {
  console.log(req.url, req.method);
  // res.sendStatus(401);
  next();
});
const router = jsonServer.router(path.join(__dirname, 'db.json'));
// server.use(router);
server.use('/api', router);

const httpsOptions = {
  key: fs.readFileSync('c:/workspace/mkcert/localhost+2-key.pem'),
  cert: fs.readFileSync('c:/workspace/mkcert/localhost+2.pem'),
};
http.createServer(server).listen(9080, () => {
  console.log('http://localhost:9080');
  console.log('JSON Server is running');
});
https.createServer(httpsOptions, server).listen(9443, () => {
  console.log('https://localhost:9443');
  console.log('JSON Server is running');
});
