#!/usr/local/bin/storj
"use strict";
try {
    const http = storj.http;
    const rpc = storj.rpc;
    rpc.listen({ ip: "localhost:8099", ssl: false });
    rpc.on_server("testMethod", (data) => {
        const cnt = data.params["id"] || 0;
        data.reply("testMethod", { id: cnt, key: "_repl_ any" });
    });
    let responses = new Map;
    let cnt2 = 0;
    const serv = http.createServer((req, res) => {
        cnt2++;
        responses.set(cnt2, res);
        storj.rpc.sendTo("localhost:8099", "testMethod", { id: cnt2, key: "hello" });
    });
    serv.listen(6012);
    rpc.on_client("testMethod", (data) => {
        const id = data.params['id'] || 0;
        if (responses.has(id)) {
            responses.get(id).end("<div>received resonse </>");
            responses.delete(id);
        }
    });
    storj.asyncExecute("ab -n 1000000 -k  -c 100   http://127.0.0.1:6012/").then((data) => {
        console.log("ab done");
        serv.stop();
        rpc.stop();
    });
}
catch (r) {
    console.log("error in server " + r);
}
