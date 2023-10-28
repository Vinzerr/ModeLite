import { CachedManager, Message, Client } from '../../index'

export class MessagesManager extends CachedManager<typeof Message> {

    constructor(client: Client){
        super(client, Message)
    }

}