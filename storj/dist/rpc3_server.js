#!/usr/local/bin/storj
"use strict";
try {
    storj.rpc.listen({ ip: "localhost:8099", ssl: false });
    storj.rpc.on_server("testMethod_m", (data) => {
        const params = data.params;
        const key2 = params["key"] || "default";
        data.reply("testMethod_s", { key: key2 + " world SRV" });
    });
}
catch (e) {
    console.log(e);
}
