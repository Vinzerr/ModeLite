# ChatMember
This represents a member of a chat from the Telegram API.

## Constructor
```js
new ChatMember(client: Client, packet: unknown, extras: Array<MembersManager>)
```

:::details Properties
- [id](#id)
- [manager](#manager)
:::

:::details Methods
- [ban](#ban)
- [unuban](#unban)
:::

## Properties
### id
The id of the member.

Return: Integer

### manager
The manager of the members of a chat this member is cached in.

Return: [MembersManager](../managers/MembersManager)

## Methods

### ban
Bans this member from the chat.

Reference: [MembersManager#ban](../managers/MembersManager#ban)

### uban
Unbans this member from the chat.

Reference: [MembersManager#unban](../managers/MembersManager#unban)