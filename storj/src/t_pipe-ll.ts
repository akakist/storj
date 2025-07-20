#!/usr/local/bin/storj

try{
  const ee=new storj.stream.EventEmitterStream();

  ee.on("data", (data:string) => {
    console.log("dataJS ",data);
  });

  ee.on("end", () => {
    console.log("end");
  });

  ee.on("error", (err:Error) => {
    console.log("error ",err);
  });
  storj.pipe.read_lines("ls -l", ee);

}catch (e) {
  console.log("Error: ", e);
}
