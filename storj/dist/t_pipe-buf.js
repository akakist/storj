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
    ee.on("error", (er) => {
        console.log("error ", er);
    });
    storj.pipe.read("ls -lR /", ee);
}
catch (e) {
    console.log("Error: ", e);
}
