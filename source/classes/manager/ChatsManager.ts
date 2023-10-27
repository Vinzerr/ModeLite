import Client from '../client/Client'
import CachedManager from './CachedManager'
import BaseChat from '../structures/BaseChat'

export enum ChatHold {
    channel = require('../structures/ChannelChat').default,
    private = require('../structures/PrivateChat').default,
    group = require('../structures/GroupChat').default,
    supergroup = require('../structures/SuperGroupChat').default
}

export default class ChatsManager extends CachedManager<typeof BaseChat> {

    public constructor(client: Client){
        super(client, BaseChat)
    }

    public override _add(packet: any, cache?: boolean, { id, extras, force, holds }: any = { }) {
        return super._add(packet, cache, { id, extras, force, holds: ChatHold[packet.type as keyof typeof ChatHold] })
    }

    public async fetch(chat_id: number): Promise<BaseChat|void> {
        var message = this.client.api.getChat(null, {
            params: {
                chat_id
            },
            lean: true
        })
        return message.ok ? Promise.resolve(this._add(message.result, true, { id: message.result.chat.id })) : Promise.reject(message.message)
    }

}