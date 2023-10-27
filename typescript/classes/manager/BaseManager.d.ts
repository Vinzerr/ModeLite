import { Client } from '../../index';
import Base from '../Base';
export default class BaseManager<OptionType = void> extends Base {
    client: Client;
    options: OptionType;
    constructor(client: Client, pointer?: string, defaults?: OptionType);
}
