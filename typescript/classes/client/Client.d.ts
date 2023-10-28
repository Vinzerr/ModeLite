import { ActionsManager, APIManager, BaseClient, ChatsManager, Logger, PollManager, type ClientOptions } from '../../index';
export declare class Client extends BaseClient {
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
