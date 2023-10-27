import { Collection } from '@discordjs/collection';
import BaseManager from './BaseManager';
export default class DataManager extends BaseManager {
    protected holds: unknown;
    protected _cache: Collection<string, any>;
    constructor(client: any, holds: unknown);
}
