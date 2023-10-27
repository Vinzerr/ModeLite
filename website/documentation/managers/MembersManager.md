# MembersManager
The manager for all the members of a chat your client handles such as fetching and getting cached members.

extends <b>[CachedManager](./CachedManager)</b>

cached <b>[ChatMember](../structures/ChatMember)</b>

## Constructor
```js
new MembersManager(client: Client)
```

:::details Properties
:::

:::details Methods
- [ban](#ban)
- [unban](#unban)
- [fetch](#fetch)
:::

## Properties

## Methods

### ban
Bans a member of the chat this manager is initiated in.

| Parameter |  Type  | Optional | Default |     Description     |
|:---------:|:------:|:--------:|:-------:|:-------------------:|
|  until_date  | number | ✓        |         | Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only. |
|  revoke_messages  | boolean | ✓        |         | Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels. |

Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)\>

### unban
Unbans a member of the chat this manager is initiated in.

| Parameter |  Type  | Optional | Default |     Description     |
|:---------:|:------:|:--------:|:-------:|:-------------------:|
|  only_if_banned  | boolean |✓         |         | Do nothing if the user is not banned |

Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)\>

### fetch
Fetch the chat with the id from the Telegram API.

| Parameter |  Type  | Optional | Default |     Description     |
|:---------:|:------:|:--------:|:-------:|:-------------------:|
|  user_id  | number\|string |          |         | The id of the member. |

Return: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[ChatMember](../structures/ChatMember)>
