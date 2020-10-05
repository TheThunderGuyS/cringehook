# cringehook
A Discord webhook that posts a funny!!1!

![imag](https://raw.githubusercontent.com/TheThunderGuyS/cringehook/2.0.0/img/demo.png)

*laugh*

![cringe](https://img.shields.io/badge/cringe-yes-%23FF69B4) ![npm version](https://img.shields.io/npm/v/cringehook?label=version&logo=npm) ![GitHub code size](https://img.shields.io/github/languages/code-size/TheThunderGuyS/cringehook?color=orange&label=size&logo=github) [![CodeFactor](https://www.codefactor.io/repository/github/thethunderguys/cringehook/badge)](https://www.codefactor.io/repository/github/thethunderguys/cringehook) [![Discord](https://img.shields.io/discord/754715521500577915?label=discord&logo=discord&logoColor=white)](https://discord.gg/4cwCxJK)

---
## The origin
This kid on Discord:

![image 1](https://raw.githubusercontent.com/TheThunderGuyS/cringehook/2.0.0/img/funnylaugh.png)

![image 2](https://raw.githubusercontent.com/TheThunderGuyS/cringehook/2.0.0/img/ccring.png)

![image 3](https://raw.githubusercontent.com/TheThunderGuyS/cringehook/2.0.0/img/message.png)

Eh, it was garbage and made nobody laugh, so I made it better :)

## Installation
### Dependencies
* Node.js (compatible with v12.18.3 LTS)
* Discord.js (compatible with v12.3.1)
#### DevDependencies (for development)
* ESLint (compatible with v7.9.0)
### Process
Navigate to the directory of your project.

Run `npm install cringehook` to install cringehook. Details on using it can be found [below](#usage).

If you plan on only ever using cringehook through the [test script](#test-script), instead install using `npm install -g cringehook` to install globally.

## Usage
If you want to skip writing code and just use cringehook from the CLI, see [test script](#test-script).

### Big brain guide
If you're smart, here's the JSDoc which should be easy to understand:

> `cringehook(id, token);`
>
> Module that post teh funi embed using a Discord.js webhook. Additional usage instructions, details and examples are in the [module's readme](./README.md).
 >
 > Parameter: *string* `id` "id" is your Webhook ID.
 >
 > Parameter: *string* `token` "token" is your Webhook Token.
 >
 > Throws: *DiscordAPIError* Throws a DiscordAPIError.
 >
 > Returns: *Promise* Returns a promise.
 >
 > Asynchronous: This module is asynchronous.

Require cringehook and use the default function as documented. See [examples](#examples).

### Noob guide
For newbies, follow the guide below:

After having installed cringehook into your project with npm, add `const cringehook = require("cringehook");` to the top of the file where you wish to use cringehook.
This will expose the `cringehook()` function to your file.

Usage of the function is fairly simple. Run `cringehook(id, token);` where you replace "id" with your Webhook ID and "token" with your Webhook Token (these must be strings).

Your Webhook ID is the set of random numbers in the URL: https://discord.com/api/webhooks/__*940402354661876488*__/Xi2auN2s_TRiSJqAUvJ693RMsrD3iANsIgHG8XB8OmvQQxB0mnxKeaERfWhOgMiFvTmy7

Your Webhook Token is the set of random characters at the end of the URL: https://discord.com/api/webhooks/940402354661876488/__*Xi2auN2s_TRiSJqAUvJ693RMsrD3iANsIgHG8XB8OmvQQxB0mnxKeaERfWhOgMiFvTmy7*__

The function will return a promise that is fulfilled upon success and rejected on an error. It will also throw a DiscordAPIError if any occurs.

### Examples
#### Basic usage:

```js
const cringehook = require("cringehook");
cringehook("940402354661876488", "Xi2auN2s_TRiSJqAUvJ693RMsrD3iANsIgHG8XB8OmvQQxB0mnxKeaERfWhOgMiFvTmy7")
    .then(a => {process.exit();});
```

#### Advanced usage (async/await and promises):
```js
const cringehook = require("cringehook");
async function ccring() {
    await cringehook("940402354661876488", "Xi2auN2s_TRiSJqAUvJ693RMsrD3iANsIgHG8XB8OmvQQxB0mnxKeaERfWhOgMiFvTmy7")
        .catch((err) => {
            console.error(`Error posting funny: ${err}`);
            process.exit(1);
        });
    console.log("Successfully posted a funny");
    process.exit();
}
ccring();
```
This example uses the `.catch` syntax to catch any thrown errors, and notify the user. [See a list of common errors below](#common-errors).

### Test script
If you wish, you can also use the built-in test script. Navigate to your project directory where cringehook is installed (skip if installed globally) and run `npx cringehook [id] [token]`, where id and token are the Webhook ID and Token as explained in [noob guide](#noob-guide). This will post teh funny straight from the CLI.

## Common errors
These are some common errors that may be thrown, and their causes:
* `DiscordAPIError: 404: Not Found`: You didn't supply a token.
* `DiscordAPIError: Invalid Form Body webhook_id: Value "" is not snowflake.`: The ID contained non-numeric characters (invalid).
* `DiscordAPIError: Invalid Webhook Token`: The supplied token is invalid or incorrect.
* `DiscordAPIError: Unknown Webhook`: The supplied webhook ID doesn't exist, or the wrong data type was given.
* `DiscordAPIError: 405: Method Not Allowed`: You didn't supply a token or some data was invalid.

## Help
For additional questions, you can [open an issue](https://github.com/TheThunderGuyS/cringehook/issues) or [join the Discord server](https://discord.gg/4cwCxJK) to ask for help.

## License
cringehook is licensed under the [MIT License](./LICENSE).

## text
idk

tfw your readme is longer than all your actual code combined

bottom text

*(c) 2020, TheThunderGuyS*
