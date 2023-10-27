import CachedManager from './CachedManager';
import BaseGroupChat from '../structures/BaseGroupChat';
import Member from '../structures/Member';
export default class MembersManager extends CachedManager<typeof Member> {
    chat: InstanceType<typeof BaseGroupChat>;
    constructor(chat: InstanceType<typeof BaseGroupChat>);
    ban(user_id: number, { until_date, revoke_messages }?: any): Promise<boolean>;
    unban(user_id: number, { only_if_banned }?: any): Promise<boolean>;
    fetch(user_id: number): Promise<Member>;
}
