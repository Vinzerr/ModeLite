import BaseManager from './BaseManager';
import Client from '../client/Client';
export default class ActionsManager extends BaseManager {
    [key: string]: any;
    constructor(client: Client);
    register(context_piece: any): void;
}
