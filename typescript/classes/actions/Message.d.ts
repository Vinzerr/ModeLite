import GenericAction from './Generic';
import Message, { MesssagePacket } from '../structures/Message';
import { Parseables } from '../client/BaseClient';
export declare enum Unsupported {
    ignore_first = "ignore_first"
}
export declare enum Service {
    ignore_first = "ignore_first",
    web_app_data = "webAppData",
    group_chat_created = "groupCreated",
    supergroup_chat_created = "supergroupCreated",
    channel_chat_created = "channelCreated",
    general_forum_topic_hidden = "generalTopicHidden",
    general_forum_topic_unhidden = "generalTopicUnhidden",
    delete_chat_photo = "chatPhotoDeleted",
    new_chat_photo = "newChatPhoto",
    new_chat_title = "newChatTitle",
    forum_topic_created = "topicCreated",
    forum_topic_closed = "topicClosed",
    forum_topic_reopened = "topicReopened",
    forum_topic_hidden = "topicHidden",
    new_chat_member = "memberJoined",
    left_chat_member = "memberLeft",
    pinned_message = "messagePinned",
    invoice = "invoice",
    passport_data = "passportData",
    reply_markup = "replyMarkup",
    successful_payment = "successfulPayment",
    video_chat_scheduled = "videoChatScheduled",
    video_chat_started = "videoChatStarted",
    video_chat_ended = "videoChatEnded",
    video_chat_participants_invited = "videoChatInvited",
    migrate_to_chat_id = "chatMigrated",
    message_auto_delete_timer_changed = "autoDeleteTimerChanged",
    user_shared = "userShared",
    chat_shared = "chatShared",
    write_access_allowed = "writeAccessAllowed",
    proximity_alert_triggered = "proximityAlertTriggered",
    documet = "document",
    audio = "audio",
    photo = "photo",
    story = "story",
    video = "video",
    video_note = "video_note",
    voice = "voice",
    animation = "animation",
    text = "message"
}
export default class MessageAction extends GenericAction {
    handle(packet: Partial<MesssagePacket>, parse?: boolean): Message | null;
    parse(message: Message): Message;
    get parsable(): (option: Parseables) => boolean | undefined;
}
