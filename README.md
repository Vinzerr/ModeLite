# ModuLite
Supported by Javascript and Typescript of your needs!

### A powerful and flexible framework for your Telegram bot.
Import, configure, and compile. As easy as that!

[![BOT API](https://img.shields.io/badge/v.6.9-00aced.svg?style=for-the-badge&logo=telegram&label=BOT%20API)](https://core.telegram.org/bots/api)
[![npm package](https://img.shields.io/npm/v/teleflax?logo=npm&style=for-the-badge)](https://www.npmjs.org/package/modulite)
[![docs](https://img.shields.io/badge/documentation-modulite-blue.svg?longCache=true&style=for-the-badge)](modulite.js.org)

## Installation

Start creating your bot today!

```bash
npm install telegram.js
```

### Basic Setup
Here is a basi Javascript setup for you to get started.
```js
const { Client, PartialTypes } = require('modulite')

const client = new Client({
    partials: [PartialType.Channel]
})

client.on('ready', (client) => {
    console.log('Your client is now ready!')
})

client.on('message', ( message ) => {
    message.reply(`Pong! You have sent a message: ${message.text}`)

    message.discussion.send('text', 'This is a message sent with telegram.js!')
})

client.initialize('your_telegram_token')
```
You can also create your bot with typescript with our exported types and interfaces!

### Get started with Telegram
Don't know where to get your token or create your own bot? Head over to [@botfather](https://core.telegram.org/bots/features#botfather).

[![BuyMeACoffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-%23FFDD00.svg?&style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoff.com/vinzerr)