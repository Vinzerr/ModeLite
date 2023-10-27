import { PartialTypes } from '../client/BaseClient';
import Client from '../client/Client';
export default class GenericAction {
    client: Client;
    constructor(client: Client);
    handle(packet: any): any;
    get partials(): {
        channel: (packet: any) => any;
    };
    payload(packet: any, manager: any, id: any, partial_type: PartialTypes): any;
}
