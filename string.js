const client = require('./client');

async function init(){
    // await client.set('msg:6','Hey from node js');
    // await client.expire("msg:6",10); expire key after 10 sec.
    //invalidate the chache after sometime
    //implement rate limiting using redis
    //use client dot for more functions.
    // const result = await client.get('msg:6');
    // const result = await client.xadd('tem','t',4);
    const result = await client.blpop('tem','t',4);
    console.log("Result -> ",result);
}

init();