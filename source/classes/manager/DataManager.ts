import { BaseManager } from '../../index'
import { Collection } from '@discordjs/collection'

export class DataManager extends BaseManager {

    protected holds: unknown
    protected _cache: Collection<string, any> = new Collection()
    public constructor(client: any, holds: unknown){
        super(client)
        this.holds = holds
    }
  
}