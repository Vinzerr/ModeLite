import BaseClient, { type ClientOptions } from './BaseClient';
import ChatsManager from '../manager/ChatsManager';
import ActionsManager from '../manager/ActionsManager';
import APIManager from '../manager/APIManager';
import PollManager from '../manager/PollManager';
import Logger from '../Logger';
export default class Client extends BaseClient {
    logger: Logger;
    api: APIManager;
    poll: PollManager;
    actions: ActionsManager;
    chats: ChatsManager;
    token: string | undefined;
    me: any;
    constructor(options: ClientOptions);
    initialize(token?: typeof this.token): Promise<void>;
}
