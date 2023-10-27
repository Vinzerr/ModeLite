import { BasePacket as BaseChatPacket, MessagePayloadMethod } from './BaseChat'
import Client from '../client/Client'
import Structure from './Structure'

export interface Entity {
    type: string
    offset: number
    length: number
    url: string
    user: UserPacket
    language: string
    custom_emoji_id: string
}

export interface MesssagePacket {
    message_id: string
    data: number
    chat: BaseChatPacket
    entities: Array<Entity>
    from: UserPacket
}

export interface UserPacket {
    id?: number
    is_bot?: boolean
    first_name?: string
    last_name?: string
    language_code?: string
    is_premium?: boolean
    added_to_attachment_menu?: boolean
    can_read_all_group_messages?: boolean
    supports_inline_queries?: boolean
}

export interface MessagePayload {
    chat_id: |string
    message_thread_id?: number
    text: Number
    parse_mode?: string
    entities?: Array<Entity>
    disable_web_page_preview?: boolean,
    disable_notification?: boolean
    protect_content?: boolean
    reply_to_message_id?: number
    allow_sending_without_reply?: boolean
    reply_markup?: any
    headers?: any
    advanced?: any
    params?: any
}

export default class Message extends Structure implements Partial<MesssagePacket> {

    public message_id?: string
    public date?: number
    public chat?: BaseChatPacket
    public entities?: Array<Entity>
    public from?: UserPacket

    constructor(client: Client, packet: MesssagePacket){
        super(client)
        this._patch(packet)
    }

    public override _patch(packet: MesssagePacket): void {
        this.defaults(packet)
    }

    public async reply(pointer: MessagePayloadMethod = MessagePayloadMethod.text, options: MessagePayload|string, path_to_file?: string): Promise<Message> {
        return this.discussion.send(pointer, {
            ...typeof options === 'string' ? { text: options } : options,
            reply_to_message_id: this.message_id
        }, path_to_file)
    }

    public get command(){
        return this.entities?.some((entity: any) => entity.type === 'bot_command')
    }

    public get member(){
        return this.discussion.members?.cache.get(this.from?.id) ?? undefined
    }

    public get discussion(){
        return this.client.chats.cache.get(String(this.chat?.id))
    }

    public get epoch(){
        const date = new Date(this.date ?? 0 * 1000),
                options:  Intl.DateTimeFormatOptions = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
                }
        return date.toLocaleString(undefined, options)
    }

}