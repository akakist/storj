#!/usr/local/bin/storj
"use strict";
try {
    storj.asyncExecute("./rpc3_server.js").then((data) => {
        console.log("./rpc3_server.js done");
    });
    storj.utils.sleep(1);
    storj.asyncExecute("./rpc3_middle.js").then((data) => {
        console.log("./rpc3_middle.js done");
    });
    storj.utils.sleep(1);
    storj.asyncExecute("./rpc3_client.js").then((data) => {
        console.log("./rpc3_client.js done");
    });
}
catch (e) {
    console.log(e);
}
