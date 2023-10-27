import { type APIOptions } from '../manager/APIManager'
import { type PollOptions } from '../manager/PollManager'
import { LogLevel } from '../Logger'
import Base from '../Base'

export enum PartialTypes {
    Channel
}

export enum Parseables {
    Commands,
    UnhandledService
}

export interface ClientOptions {
    [key: string]: any
    logger?: {
        level?: LogLevel
    },
    partials?: Array<PartialTypes>
    parse?: Array<Parseables>
    api?: APIOptions
    poll?: PollOptions
}

export default class BaseClient extends Base {

    public options: ClientOptions
    public constructor(options: ClientOptions){
        super()
        this.options = this.defaults({
            logger: {
                level: LogLevel.Debug
            }
        }, options)
    }

}