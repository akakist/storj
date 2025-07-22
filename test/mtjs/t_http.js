#!/usr/local/bin/mtjs
"use strict";
try {
    const http = mtjs.http;
    const serv = http.createServer((req, res) => {
        res.end("<div>received resonse </>");
    });
    serv.listen(6012);
    mtjs.asyncExecute("ab -n 1000000 -k  -c 100   http://127.0.0.1:6012/").then((data) => {
        console.log("ab done", data);
        serv.stop();
    });
}
catch (e) {
    console.log("error in server " + e);
}
