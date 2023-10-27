---
prev: false
next: false
---

# Client
The main hub for interacting with the Telegram API, and the starting point for any bot.

## Constructor
```js
new Client(options: ClientOptions)
```

| Name    | Type            | Required  | Description               |
|:-------:|:---------------:|:---------:|:-------------------------:|
|options  | ClientOptions   | ✓        | Options for your client.   |

:::details Properties
- [logger](#logger)
- [chats](#chats)
:::

:::details Methods
- [initialize](#initialize)
:::

## Events
Here are the events the client may listen to, if the property is found, the corressponding event is emitted. Example; if the message was to have a <b>'text'</b> property it will be emitted to the client with eventName <b>'message'</b>,

```js
client.on('message')
```

| Property                        | EventName                      |
| :------------------------------ | :---------------------------- |
| web_app_data                    | webAppData                    |
| group_chat_created              | groupCreated                  |
| supergroup_chat_created         | supergroupCreated             |
| channel_chat_created            | channelCreated                |
| general_forum_topic_hidden      | generalTopicHidden            |
| general_forum_topic_unhidden    | generalTopicUnhidden          |
| delete_chat_photo               | chatPhotoDeleted              |
| new_chat_photo                  | newChatPhoto                  |
| new_chat_title                  | newChatTitle                  |
| forum_topic_created             | topicCreated                  |
| forum_topic_closed              | topicClosed                   |
| forum_topic_reopened            | topicReopened                 |
| forum_topic_hidden              | topicHidden                   |
| new_chat_member                 | memberJoined                  |
| left_chat_member                | memberLeft                    |
| pinned_message                  | messagePinned                 |
| invoice                        | invoice                       |
| passport_data                  | passportData                  |
| reply_markup                    | replyMarkup                    |
| successful_payment              | successfulPayment              |
| video_chat_scheduled            | videoChatScheduled             |
| video_chat_started              | videoChatStarted               |
| video_chat_ended                | videoChatEnded                 |
| video_chat_participants_invited | videoChatInvited               |
| migrate_to_chat_id              | chatMigrated                  |
| message_auto_delete_timer_changed | autoDeleteTimerChanged        |
| user_shared                     | userShared                     |
| chat_shared                     | chatShared                     |
| write_access_allowed             | writeAccessAllowed             |
| proximity_alert_triggered        | proximityAlertTriggered        |
| documet                        | document                      |
| audio                          | audio                         |
| photo                          | photo                         |
| story                          | story                         |
| video                          | video                         |
| video_note                     | video_note                    |
| voice                          | voice                         |
| animation                      | animation                      |
| text                           | message                        |

### External Events

| Property                        | EventName                      |
| :------------------------------ | :---------------------------- |
| [Entity](https://core.telegram.org/bots/api#messageentity)\<type: bot_command\>                    | command                    |

## Properties

### logger
The manager for the client's debugger responsible for emitting errors, warnings, info and debugs.

Return: Logger

### chats
The manager for all the chats your client handles such as fetching and getting cached chats.

Return: [ChatsManager](../managers/ChatsManager)

## Methods

### initialize
Initializes the client, obtain me and start polling via Long Polling.
| Parameter |  Type  | Optional | Default |                     Description                    |
|:---------:|:------:|:--------:|:-------:|:--------------------------------------------------:|
|   token   | string |          |         | The token Telegram provided for access to the API. |

The token can also be stored in your dotenv file.
```js
this.token = process.env.TELEGRAM_TOKEN ?? token
```

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Client](#Client)>