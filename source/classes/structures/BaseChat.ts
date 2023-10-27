import Message, { MessagePayload } from './Message'
import { createReadStream } from 'fs'
import FormData = require('form-data')
import MessagesManager from '../manager/MessagesManager'
import Client from '../client/Client'
import Structure from './Structure'

export type ChatType = 'private'|'supergroup'|'group'|'channel'
export interface BasePacket {
    type: ChatType
    id: number
    is_forum?: boolean
    user_name?: string
    first_name?: string
    last_name?: string
    last_message_id?: number
}

export enum MessagePayloadMethod {
    ignore_first = 'ignore_first',
    text = 'sendMessage',
    document = 'sendDocument',
    video = 'sendVideo',
    animation = 'sendAnimation',
    voice = 'sendVoice',
    video_note = 'sendVideoNote',
    media_group = 'sendMediaGroup',
    action = 'sendChatAction',
    photo = 'sendPhoto'
}

export default class BaseChat extends Structure implements Partial<BasePacket> {

    public id?: number
    public partial: boolean = true
    public last_message_id?: number = 0
    public messages: MessagesManager
    public constructor(client: Client, packet: Partial<BasePacket>){
        super(client)
        this._patch(packet)

        this.messages = new MessagesManager(this.client)

    }

    public override _patch(packet: Partial<BasePacket>): any {
        this.defaults(packet)
    }

    public async send(pointer: MessagePayloadMethod = MessagePayloadMethod.text, options: any|string, path_to_file?: string|Array<[string, string]>): Promise<Message> {
        const payload = typeof options === 'string' ? { text: options } : options
        const form = new FormData()
        if(typeof path_to_file === 'string'){
            form.append(pointer, createReadStream(path_to_file))
        } else if(Array.isArray(path_to_file)){
            path_to_file.forEach(([key, value]: [string, string]) => {
                form.append(key, createReadStream(value))
            })
        }
        const message = await this.client.api[MessagePayloadMethod[pointer as keyof typeof MessagePayloadMethod]](path_to_file ? form : null, {
            params: {
                chat_id: this.id,
                ...payload
            },
            headers: {
                ...form ? form.getHeaders() : { },
                ...payload.headers ?? { }
            },
            ...payload.advanced ?? { },
            lean: true
        })
        return message.ok ? Promise.resolve(this.client.actions.message.handle(message.result, false)) : Promise.reject(message.message)
    }

}