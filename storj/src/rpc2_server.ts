#!/usr/local/bin/storj

try{
    const rpc = storj.rpc;
    rpc.listen({ip:"localhost:8099", ssl:false});
    rpc.on_server("testMethod", (data:rpcServerRequest) => {
        const params = data.params;
        const key2= params["key"] || "default";
        data.reply("testMethod", { key:  key2+ " world" });
    });
}
catch(e){console.log(e)}