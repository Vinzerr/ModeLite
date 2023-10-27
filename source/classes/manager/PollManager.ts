import BaseManager from './BaseManager'
import Client from '../client/Client'

export type AllowedUpdates = 'message'|'edited_message'|'channel_post'|'edited_channel_post'|'my_chat_member'|'chat_member'
export interface PollOptions {
    limit: number
    timeout: number
    allow_updates: Array<AllowedUpdates>,
    delay?: number
}

export default class PollManager extends BaseManager<PollOptions> {

    public active: boolean = false
    public offset?: number
    public interluder?: NodeJS.Timeout
    public constructor(client: Client){
        super(client, 'poll', {
            limit: 100,
            timeout: 0,
            delay: 2.5,
            allow_updates: ["message", "edited_message", "channel_post", "edited_channel_post", "my_chat_member", "chat_member"]
        })
    }

    public switch(): void {
        this.active = !this.active
        clearTimeout(this.interluder)
    }

    public async initialize(): Promise<void> {
        this.client.logger.debug('Poll manager is now starting to be able to get updates from the Telegram API.')
        this.active = true
        this.interlude()
    }

    private async interlude(): Promise<void> {
        var message = await this.poll()
        if(typeof message === 'string'){
            this.client.logger.error(message)
        } else if(Array.isArray(message)){
            for(const update of message){
                this.offset = update.update_id + 1
                for(const pointer in update){
                    if(['update_id'].includes(pointer)) continue
                    if(this.client.actions[pointer]) this.client.actions[pointer].handle(update[pointer])
                    else this.client.emit('unhandled', update)
                    this.client.emit('raw', update)
                }
            }
        }
        this.interluder = setTimeout(() => {
            this.active ?
                this.interlude()
            :   null
        }, this.options.delay ?? 0 * 1000)
    }

    private async poll(): Promise<any> {
        var { limit, allow_updates, timeout } = this.options,
            { offset } = this
        var message = await this.client.api.getUpdates(null, {
            params: {
                limit, allow_updates, timeout, offset
            },
            lean: true
        })
        return message.ok ?
            message.result
        :   message.message
    }
    
}