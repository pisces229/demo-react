// server.js
const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require("fs");

// [Error: UNABLE_TO_VERIFY_LEAF_SIGNATURE]
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 9012;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('c:/workspace/mkcert/localhost+2-key.pem'),
  cert: fs.readFileSync('c:/workspace/mkcert/localhost+2.pem'),
};

app.prepare().then(() => {
  createServer(httpsOptions, async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
  .once('error', (err) => {
    console.error(err);
    process.exit(1);
  })
  .listen(port, () => {
    console.log(`> Ready on https://${hostname}:${port}`);
  });
});
