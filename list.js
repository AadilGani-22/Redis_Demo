const client = require('./client');

async function init(){
    const result = await client.rpop("messages");
}

init();