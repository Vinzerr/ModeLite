import { BaseManager } from '../../index';
import { Collection } from '@discordjs/collection';
export declare class DataManager extends BaseManager {
    protected holds: unknown;
    protected _cache: Collection<string, any>;
    constructor(client: any, holds: unknown);
}
