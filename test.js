#!/usr/bin/env node
//Cringehook test script
const cringehook = require("./index.js");
async function ccring() {
    try {
        await cringehook.postCringe(process.argv[2], process.argv[3]);
    } catch (err) {
        console.error(`Error posting funny: ${err}`);
        process.exit(1);
    }
    console.log("Successfully posted a funny");
    process.exit();
}
ccring();
