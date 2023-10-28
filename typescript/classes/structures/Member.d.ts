import { Client, MembersManager, Structure, type UserPacket } from '../../index';
export interface MemberPacket {
    status?: string;
    user?: UserPacket;
    is_anonymous?: boolean;
    custom_title?: string;
}
export declare class Member extends Structure implements Partial<MemberPacket> {
    manager: MembersManager;
    status?: string;
    user?: any;
    constructor(client: Client, packet: Partial<any>, extras: [MembersManager]);
    _patch(packet: Partial<any>): void;
    ban({ until_date, revoke_messages }?: any): Promise<boolean>;
    unban({ only_if_banned }?: any): Promise<boolean>;
    get id(): any;
}
