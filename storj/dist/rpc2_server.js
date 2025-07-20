#!/usr/local/bin/storj
"use strict";
try {
    const rpc = storj.rpc;
    rpc.listen({ ip: "localhost:8099", ssl: false });
    rpc.on_server("testMethod", (data) => {
        const params = data.params;
        const key2 = params["key"] || "default";
        data.reply("testMethod", { key: key2 + " world" });
    });
}
catch (e) {
    console.log(e);
}
