# MessagePayload
This represents a payload of the message you wish to transmit.

Types
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

| Property                  | Type                    | Optional |
|---------------------------|-------------------------|:--------:|
| chat_id                   | string                  |          |
| message_thread_id         | number                  | ✓        |
| text                      | Number                  | ✓        |
| parse_mode                | string                  | ✓        |
| entities                  | Array\<[Entity](https://core.telegram.org/bots/api#messageentity)\>         | ✓        |
| disable_web_page_preview  | boolean                 | ✓        |
| disable_notification      | boolean                 | ✓        |
| protect_content           | boolean                 | ✓        |
| reply_to_message_id       | number                  | ✓        |
| allow_sending_without_reply| boolean                | ✓        |
| reply_markup              | any                     | ✓        |
| headers                   | any                     | ✓        |
| advanced                  | any                     | ✓        |
| params                    | any                     | ✓        |