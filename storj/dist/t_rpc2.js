#!/usr/local/bin/storj
"use strict";
storj.asyncExecute("./rpc2_server.js").then(() => {
    console.log("./rpc2_server.js done");
});
storj.asyncExecute("./rpc2_client.js").then(() => {
    console.log("./rpc2_client.js done");
});
