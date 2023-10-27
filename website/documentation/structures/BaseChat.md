# BaseChat
This represents a BaseChat.

## Constructor
```js
new BaseChat(client: Client, packet: unknown)
```

:::details Properties
:::

:::details Methods
- [send](#send)
:::

## Properties

## Methods
### send
Send a message that may contain text or files to the chat this represents.

|   Parameter  |               Type               | Default | Required |                                                 Description                                                 |
|:------------:|:--------------------------------:|:-------:|:--------:|:-----------------------------------------------------------------------------------------------------------:|
|    pointer   |       [MessagePayloadMethod](../types/MessagePayloadMethod)       |         |     x    |                            The pointer of which type of message you wish to send.                           |
|    options   |      [MessagePayload](../types/MessagePayload)\|string      |         |     x    | A string if you're just sending a text message, or the options of your payload.                             |
| path_to_file | string\|Array<[pointer, string]> |         |          | A string path to the file you wish to attach or an array of pointer and files for multiple like thumbnails. |

Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Message](./Message)>