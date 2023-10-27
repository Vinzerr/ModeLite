import Client from '../client/Client';
import CachedManager from './CachedManager';
import BaseChat from '../structures/BaseChat';
export declare enum ChatHold {
    channel,
    private,
    group,
    supergroup
}
export default class ChatsManager extends CachedManager<typeof BaseChat> {
    constructor(client: Client);
    _add(packet: any, cache?: boolean, { id, extras, force, holds }?: any): any;
    fetch(chat_id: number): Promise<BaseChat | void>;
}
