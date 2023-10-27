import DataManager from './DataManager'

export default class CachedManager<HoldType> extends DataManager {

    public constructor(client: any, holds: HoldType, iterable?: any[]){
        super(client, holds)
        if(iterable){
            for(const hold of iterable){
                this._add(hold)
            }
        }
    }

    public get cache(){
        return this._cache
    }

    public _add(data: any, cache: boolean = true, { id, extras = [ ], force, holds }: any = { }): any {
        const existing = this.cache.get(id ?? data.id)
        if(existing && force === false){
            if(cache){
                existing._patch(data)
                return existing
            }
            const clone = existing._clone()
            clone._patch(data)
            return clone
        }
        const entry = this.holds ? new (holds ?? this.holds)(this.client, data, extras ?? undefined) : data
        if(cache) this.cache.set(id ?? entry.id, entry)
        return entry
    }
  
}