# ChatsManager
The manager for all the chats your client handles such as fetching and getting cached chats.

extends <b>[CachedManager](./CachedManager)</b>

cached <b>[Chat](../structures/Chat)</b>

## Constructor
```js
new ChatManager(client: Client)
```

:::details Properties
:::

:::details Methods
- [fetch](#fetch)
:::

## Properties

## Methods

### fetch
Fetch the chat with the id from the Telegram API.

| Parameter |  Type  | Optional | Default |     Description     |
|:---------:|:------:|:--------:|:-------:|:-------------------:|
|  chat_id  | number\|string |          |         | The id of the chat. |

Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Chat](../structures/Chat)>
