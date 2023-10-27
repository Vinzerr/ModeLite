import { BasePacket as BaseChatPacket, MessagePayloadMethod } from './BaseChat';
import Client from '../client/Client';
import Structure from './Structure';
export interface Entity {
    type: string;
    offset: number;
    length: number;
    url: string;
    user: UserPacket;
    language: string;
    custom_emoji_id: string;
}
export interface MesssagePacket {
    message_id: string;
    data: number;
    chat: BaseChatPacket;
    entities: Array<Entity>;
    from: UserPacket;
}
export interface UserPacket {
    id?: number;
    is_bot?: boolean;
    first_name?: string;
    last_name?: string;
    language_code?: string;
    is_premium?: boolean;
    added_to_attachment_menu?: boolean;
    can_read_all_group_messages?: boolean;
    supports_inline_queries?: boolean;
}
export interface MessagePayload {
    chat_id: string;
    message_thread_id?: number;
    text: Number;
    parse_mode?: string;
    entities?: Array<Entity>;
    disable_web_page_preview?: boolean;
    disable_notification?: boolean;
    protect_content?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: any;
    headers?: any;
    advanced?: any;
    params?: any;
}
export default class Message extends Structure implements Partial<MesssagePacket> {
    message_id?: string;
    date?: number;
    chat?: BaseChatPacket;
    entities?: Array<Entity>;
    from?: UserPacket;
    constructor(client: Client, packet: MesssagePacket);
    _patch(packet: MesssagePacket): void;
    reply(pointer: MessagePayloadMethod | undefined, options: MessagePayload | string, path_to_file?: string): Promise<Message>;
    get command(): boolean | undefined;
    get member(): any;
    get discussion(): any;
    get epoch(): string;
}
