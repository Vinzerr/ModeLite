import CachedManager from './CachedManager'
import BaseGroupChat from '../structures/BaseGroupChat'
import Member from '../structures/Member'

export default class MembersManager extends CachedManager<typeof Member> {
    
    public chat: InstanceType<typeof BaseGroupChat>
    public constructor(chat: InstanceType<typeof BaseGroupChat>){
        super(chat.client, Member)
        this.chat = chat
    }

    public ban(user_id: number, { until_date, revoke_messages }: any = { until_date: undefined, revoke_messages: true }): Promise<boolean> {
        return this.client.api.banChatMember(null, {
            params: {
                chat_id: this.chat.id,
                user_id, until_date, revoke_messages
            },
            returnOk: true
        })
      }
    
    public unban(user_id: number, { only_if_banned }: any = { only_if_banned: undefined }): Promise<boolean> {
        return this.client.api.unbanChatMember(null, {
            params: {
                chat_id: this.chat.id,
                user_id, only_if_banned
            },
            returnOk: true
        })
    }

    public async fetch(user_id: number): Promise<Member> {
        var message = await this.client.api.getChatMember(null, {
            params: {
                user_id,
                chat_id: this.chat.id
            },
            lean: true
        })
        return message.ok ? Promise.resolve(super._add(message.result, true, { id: message.result.user.id, extras: [this] })) : Promise.reject(message.message)
    }

}