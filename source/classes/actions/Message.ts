import {
    GenericAction,
    Message,
    Parseables,
    type MessagePacket
} from '../../index'

export enum Unsupported {
    ignore_first = 'ignore_first',
}

export enum Service {
    ignore_first = 'ignore_first',
    web_app_data = 'webAppData',
    group_chat_created = 'groupCreated',
    supergroup_chat_created = 'supergroupCreated',
    channel_chat_created = 'channelCreated',
    general_forum_topic_hidden = 'generalTopicHidden',
    general_forum_topic_unhidden = 'generalTopicUnhidden',
    delete_chat_photo = 'chatPhotoDeleted',
    new_chat_photo = 'newChatPhoto',
    new_chat_title = 'newChatTitle',
    forum_topic_created = 'topicCreated',
    forum_topic_closed = 'topicClosed',
    forum_topic_reopened = 'topicReopened',
    forum_topic_hidden = 'topicHidden',
    new_chat_member = 'memberJoined',
    left_chat_member = 'memberLeft',
    pinned_message = 'messagePinned',
    invoice = 'invoice',
    passport_data = 'passportData',
    reply_markup = 'replyMarkup',
    successful_payment = 'successfulPayment',
    video_chat_scheduled = 'videoChatScheduled',
    video_chat_started = 'videoChatStarted',
    video_chat_ended = 'videoChatEnded',
    video_chat_participants_invited = 'videoChatInvited',
    migrate_to_chat_id = 'chatMigrated',
    message_auto_delete_timer_changed = 'autoDeleteTimerChanged',
    user_shared = 'userShared',
    chat_shared = 'chatShared',
    write_access_allowed = 'writeAccessAllowed',
    proximity_alert_triggered = 'proximityAlertTriggered',
    documet = 'document',
    audio = 'audio',
    photo = 'photo',
    story = 'story',
    video = 'video',
    video_note = 'video_note',
    voice = 'voice',
    animation = 'animation',
    text = 'message'
}

export class MessageAction extends GenericAction {
    public override handle(packet: Partial<MessagePacket>, parse: boolean = true ): Message|null {
        const partial_chat = this.partials.channel(packet.chat)
        if(partial_chat){
            const existing = partial_chat.messages.cache.get(packet.message_id)
            if(existing){
                existing._patch(packet)
                return parse ? this.parse(existing) : existing
            }
            const message = partial_chat.messages._add(packet)
                            partial_chat.last_message_id = packet.message_id
            return parse ? this.parse(message) : message
        }
        return null
    }

    public parse(message: Message): Message {
        for(const pointer in message){
            if(message.command && this.parsable(Parseables.Commands)) this.client.emit('command', message)
            if(Service[pointer as keyof typeof Service]){
                if(!this.client.listeners(Service[pointer as keyof typeof Service]).length) this.client.logger.warn(`You have no listeners listening to the event: ${Service[pointer as keyof typeof Service]}, this event is otherwise ignored.`)
                else this.client.emit(Service[pointer as keyof typeof Service], message)
            }
            if(!Service[pointer as keyof typeof Service] && Unsupported[pointer as keyof typeof Unsupported] && this.parsable(Parseables.UnhandledService)) this.client.emit('unhandled', message)
        }
        return message
    }

    public get parsable(){
        return (option: Parseables) => {
          return this.client.options.parse?.some((parsable: Parseables): boolean => parsable === option)
        }
    }

}