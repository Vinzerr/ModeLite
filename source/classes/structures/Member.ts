import {
    Client,
    MembersManager,
    Structure,
    type UserPacket
} from '../../index'

export interface MemberPacket {
    status?: string
    user?: UserPacket
    is_anonymous?: boolean
    custom_title?: string
}

export class Member extends Structure implements Partial<MemberPacket> {

    public manager: MembersManager
    public status?: string
    public user?: any
    constructor(client: Client, packet: Partial<any>, extras: [MembersManager]){
        super(client)

        this.manager = extras[0]

        this._patch(packet)
    }

    public override _patch(packet: Partial<any>): void {
        this.defaults(packet)
    }

    public ban({ until_date, revoke_messages }: any = { until_date: undefined, revoke_messages: true }): Promise<boolean> {
        return this.manager.ban(this.id, { until_date, revoke_messages })
    }

    public unban({ only_if_banned }: any = { only_if_banned: undefined }): Promise<boolean> {
        return this.manager.unban(this.id, { only_if_banned})
    }

    public get id(){
        return this.user?.id
    }

}