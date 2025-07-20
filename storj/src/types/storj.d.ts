import { StreamModule } from "./stream";

declare global
{

    interface storjModule
    {
        telnet:telnetModule;
        http: httpModule;
        async asyncExecute(command: string): Promise<void>;
        pipe: Pipe;
        STDIN: STDIN;
        rpc:rpcModule;
        stream:StreamModule;
        utils:UtilsModule;
    }
    const storj: storjModule;

}
export {  };