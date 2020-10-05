#!/usr/bin/env node
"use strict";
//Cringehook test script
const cringehook = require("./index.js");
async function ccring() {
    if (!process.argv[2] || !process.argv[3]) { //Notify the user if they forgot to add an ID/Token and quit
        console.log("Usage: \"npx cringehook [id] [token]\" \nid is your Webhook ID and token is your Webhook Token. \nExample: \"npx cringehook 940402354661876488 Xi2auN2s_TRiSJqAUvJ693RMsrD3iANsIgHG8XB8OmvQQxB0mnxKeaERfWhOgMiFvTmy7\"");
        process.exit();
    }
    await cringehook(process.argv[2], process.argv[3]) //Post
        .catch((err) => { //Catch errors, log and quit
            console.error(`Error posting funny: ${err}`);
            process.exit(1);
        });
    console.log("Successfully posted a funny"); //Notify users of success and quit
    process.exit();
}
ccring(); //Run function
