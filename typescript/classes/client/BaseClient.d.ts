import { type APIOptions, type PollOptions, LogLevel, Base } from '../../index';
export declare enum PartialTypes {
    Channel = 0
}
export declare enum Parseables {
    Commands = 0,
    UnhandledService = 1
}
export interface ClientOptions {
    [key: string]: any;
    logger?: {
        level?: LogLevel;
    };
    partials?: Array<PartialTypes>;
    parse?: Array<Parseables>;
    api?: APIOptions;
    poll?: PollOptions;
}
export declare class BaseClient extends Base {
    options: ClientOptions;
    constructor(options: ClientOptions);
}
