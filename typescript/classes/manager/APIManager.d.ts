import BaseManager from './BaseManager';
import Client from '../client/Client';
export interface APIOptions {
    base: string;
    token?: string | undefined;
}
export interface RequestOptions {
    returnOk?: boolean;
    result?: boolean;
    lean?: boolean;
}
export type AxiosMethod = 'get' | 'post';
export default class APIManager extends BaseManager<APIOptions> {
    [key: string]: any;
    constructor(client: Client);
    acknowledge(method: string): void;
    generate(method: string): string;
    request(URL: string, method: AxiosMethod, ...argumants: any[]): Promise<any>;
    setToken(token: typeof this.options.token): void;
    get token(): string;
}
