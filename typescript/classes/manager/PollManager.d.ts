/// <reference types="node" />
import BaseManager from './BaseManager';
import Client from '../client/Client';
export type AllowedUpdates = 'message' | 'edited_message' | 'channel_post' | 'edited_channel_post' | 'my_chat_member' | 'chat_member';
export interface PollOptions {
    limit: number;
    timeout: number;
    allow_updates: Array<AllowedUpdates>;
    delay?: number;
}
export default class PollManager extends BaseManager<PollOptions> {
    active: boolean;
    offset?: number;
    interluder?: NodeJS.Timeout;
    constructor(client: Client);
    switch(): void;
    initialize(): Promise<void>;
    private interlude;
    private poll;
}
