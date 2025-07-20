#!/usr/local/bin/storj
"use strict";
try {
    const http = storj.http;
    const serv = http.createServer((req, res) => {
        res.end("<div>received resonse </>");
    });
    serv.listen(6012);
    storj.asyncExecute("ab -n 1000000 -k  -c 100   http://127.0.0.1:6012/");
    storj.asyncExecute("ab -n 1000000 -k  -c 100   http://127.0.0.1:6012/").then((data) => {
        console.log("ab done", data);
        serv.stop();
    });
}
catch (e) {
    console.log("error in server " + e);
}
