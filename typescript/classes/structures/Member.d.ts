import { UserPacket } from './Message';
import MembersManager from '../manager/MembersManager';
import Structure from './Structure';
import Client from '../client/Client';
export interface MemberPacket {
    status?: string;
    user?: UserPacket;
    is_anonymous?: boolean;
    custom_title?: string;
}
export default class Member extends Structure implements Partial<MemberPacket> {
    manager: MembersManager;
    status?: string;
    user?: any;
    constructor(client: Client, packet: Partial<any>, extras: [MembersManager]);
    _patch(packet: Partial<any>): void;
    ban({ until_date, revoke_messages }?: any): Promise<boolean>;
    unban({ only_if_banned }?: any): Promise<boolean>;
    get id(): any;
}
