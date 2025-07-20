#!/usr/local/bin/storj

storj.asyncExecute("ls |./stdin.js").then((data:any) => {
    console.log("job done");
});
