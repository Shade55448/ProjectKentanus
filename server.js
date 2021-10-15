"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const port = 80;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n' + res.connection.localPort);
}).listen(port);
//# sourceMappingURL=server.js.map