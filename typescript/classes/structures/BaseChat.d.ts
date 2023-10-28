import { Client, Message, MessagesManager, Structure } from '../../index';
export type ChatType = 'private' | 'supergroup' | 'group' | 'channel';
export interface BasePacket {
    type: ChatType;
    id: number;
    is_forum?: boolean;
    user_name?: string;
    first_name?: string;
    last_name?: string;
    last_message_id?: number;
}
export declare enum MessagePayloadMethod {
    ignore_first = "ignore_first",
    text = "sendMessage",
    document = "sendDocument",
    video = "sendVideo",
    animation = "sendAnimation",
    voice = "sendVoice",
    video_note = "sendVideoNote",
    media_group = "sendMediaGroup",
    action = "sendChatAction",
    photo = "sendPhoto"
}
export declare class BaseChat extends Structure implements Partial<BasePacket> {
    id?: number;
    partial: boolean;
    last_message_id?: number;
    messages: MessagesManager;
    constructor(client: Client, packet: Partial<BasePacket>);
    _patch(packet: Partial<BasePacket>): any;
    send(pointer: MessagePayloadMethod | undefined, options: any | string, path_to_file?: string | Array<[string, string]>): Promise<Message>;
}
