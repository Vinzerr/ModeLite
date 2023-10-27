import BaseClient, { type ClientOptions } from './BaseClient'
import ChatsManager from '../manager/ChatsManager'
import ActionsManager from '../manager/ActionsManager'
import APIManager from '../manager/APIManager'
import PollManager from '../manager/PollManager'
import Logger from '../Logger';

export default class Client extends BaseClient {

    public logger: Logger
    public api: APIManager
    public poll:  PollManager
    public actions: ActionsManager
    public chats: ChatsManager

    public token: string|undefined
    public me: any
    public constructor(options: ClientOptions){
        super(options)

        this.token = undefined

        this.logger = new Logger(this.options.logger?.level)
        
        this.api = new APIManager(this)

        this.poll = new PollManager(this)

        this.actions = new ActionsManager(this)

        this.chats = new ChatsManager(this)
        
        if(!this.token && 'TELEGRAM_TOKEN' in process.env){
            this.token = process.env.TELEGRAM_TOKEN
        }

    }

    public async initialize(token: typeof this.token = this.token): Promise<void> {
        this.logger.debug('Starting client and obtaining me information from Telegram api. This will also start the poll manager to retrieve updates from Telegram via Long Polling.')
        this.api.setToken(token)
        var message = await this.api.getMe([], { lean: true })
        this.me = message.ok ? message.result : undefined
        this.logger.info(`Hello ${this.me.first_name}@${this.me.username}!`)
        this.poll.initialize()
        this.emit('ready', this)
    }
    
}