import Client from '../client/Client';
export default class Structure {
    client: Client;
    constructor(client: Client);
    _patch(packet: unknown): unknown;
    _clone(): this;
    defaults(defaults: any, context?: any): any;
}
