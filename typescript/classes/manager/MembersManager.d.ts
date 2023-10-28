import { CachedManager, BaseGroupChat, Member } from '../../index';
export declare class MembersManager extends CachedManager<typeof Member> {
    chat: InstanceType<typeof BaseGroupChat>;
    constructor(chat: InstanceType<typeof BaseGroupChat>);
    ban(user_id: number, { until_date, revoke_messages }?: any): Promise<boolean>;
    unban(user_id: number, { only_if_banned }?: any): Promise<boolean>;
    fetch(user_id: number): Promise<Member>;
}
