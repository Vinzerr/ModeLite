import CachedManager from './CachedManager';
import Message from '../structures/Message';
import Client from '../client/Client';
export default class MessagesManager extends CachedManager<typeof Message> {
    constructor(client: Client);
}
