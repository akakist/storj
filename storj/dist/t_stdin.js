#!/usr/local/bin/storj
"use strict";
storj.asyncExecute("ls |./stdin.js").then((data) => {
    console.log("job done");
});
