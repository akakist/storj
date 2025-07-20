#!/usr/local/bin/storj
"use strict";
try {
    const serv = storj.http.createServer((req, res) => {
        if (req.is_chunked) {
            let ee = new storj.stream.EventEmitterStream;
            ee.on("data", (s) => { console.log("JS on data sz", s.byteLength); res.write("hello world!"); });
            ee.on("end", () => { console.log("JS END"); res.end("hello worldZ!"); });
            req.stream = ee;
        }
        else {
            res.write("<div>received resonse </>");
        }
    });
    serv.listen(6012);
    // storj.asyncExecute("dd if=/dev/urandom bs=1K count=10000 |   curl -X POST     -H \"Transfer-Encoding: chunked\" -H \"Content-Type: application/octet-stream\"     --data-binary @- http://localhost:6012/")
    storj.asyncExecute("curl -X POST     -H \"Transfer-Encoding: chunked\" -H \"Content-Type: application/octet-stream\"     --data-binary @/tmp/z http://localhost:6012/")
        .finally(() => serv.stop());
}
catch (e) {
    console.log("error in server " + e);
}
