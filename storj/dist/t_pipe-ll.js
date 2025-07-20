#!/usr/local/bin/storj
"use strict";
try {
    const ee = new storj.stream.EventEmitterStream();
    ee.on("data", (data) => {
        console.log("dataJS ", data);
    });
    ee.on("end", () => {
        console.log("end");
    });
    ee.on("error", (err) => {
        console.log("error ", err);
    });
    storj.pipe.read_lines("ls -l", ee);
}
catch (e) {
    console.log("Error: ", e);
}
