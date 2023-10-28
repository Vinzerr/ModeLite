import { CachedManager, Message, Client } from '../../index';
export declare class MessagesManager extends CachedManager<typeof Message> {
    constructor(client: Client);
}
