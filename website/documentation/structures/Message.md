---
next: false
prev: false
---

# Message
This structure represent a message from Telegram.

## Constructor
```js
new Message(client: Client, packet: MessagePacket)
```

:::details Properties
- [discussion](#discussion)
:::

:::details Methods
- [reply](#reply)
:::

## Properties
### discussion
The chat the message was generated from.

Return: [Chat](./Chat)

### member
The sender of the message as a member that needs to be fetched first. This property is only accessible if the message was from a: GroupChat, SuperGroupChat and ChannelChat; otherwise it is undefined.

Return: [ChatMember](./ChatMember)|undefined

### user
The sender of the message as a user.

Return: [User](../types/User)

## Methods
### reply
Send a reply to the message it represents.

|   Parameter  |               Type               | Default | Required |                                                 Description                                                 |
|:------------:|:--------------------------------:|:-------:|:--------:|:-----------------------------------------------------------------------------------------------------------:|
|    pointer   |       [MessagePayloadMethod](../types/MessagePayloadMethod)       |         |     x    |                            The pointer of which type of message you wish to send.                           |
|    options   |      [MessagePayload](../types/MessagePayload.md)\|string      |         |     x    | A string if you're just sending a text message, or the options of your payload.                             |
| path_to_file | string\|Array<[pointer, string]> |         |          | A string path to the file you wish to attach or an array of pointer and files for multiple like thumbnails. |

Reference: [BaseChat.send()](./BaseChat#send)

Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Message](./Message)>