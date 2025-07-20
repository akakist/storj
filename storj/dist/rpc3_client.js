#!/usr/local/bin/storj
"use strict";
try {
    var cnt = 0;
    const rpc = storj.rpc;
    const start0 = Math.floor(Date.now() / 1000);
    rpc.on_client("testMethod_s", (data) => {
        // console.log("c: testMethod_s");
        rpc.sendTo("localhost:8010", "testMethod_c", { key: "hello" });
        cnt++;
        if (cnt % 10000 == 0) {
            const t = Math.floor(Date.now() / 1000);
            console.log("Received on client:", JSON.stringify(data.params), " t ", t - start0, " n ", cnt);
        }
    });
    for (let i = 0; i < 300; i++)
        rpc.sendTo("localhost:8010", "testMethod_c", { key: "hello" });
}
catch (e) {
    console.log(e);
}
