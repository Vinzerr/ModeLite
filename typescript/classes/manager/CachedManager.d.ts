import { DataManager } from '../../index';
export declare class CachedManager<HoldType> extends DataManager {
    constructor(client: any, holds: HoldType, iterable?: any[]);
    get cache(): import("@discordjs/collection").Collection<string, any>;
    _add(data: any, cache?: boolean, { id, extras, force, holds }?: any): any;
}
