import { Client, Base } from '../../index';
export declare class BaseManager<OptionType = void> extends Base {
    client: Client;
    options: OptionType;
    constructor(client: Client, pointer?: string, defaults?: OptionType);
}
