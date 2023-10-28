import { Client, CachedManager, BaseChat } from '../../index';
export declare enum ChatHold {
    channel,
    private,
    group,
    supergroup
}
export declare class ChatsManager extends CachedManager<typeof BaseChat> {
    constructor(client: Client);
    _add(packet: any, cache?: boolean, { id, extras, force, holds }?: any): any;
    fetch(chat_id: number): Promise<BaseChat | void>;
}
