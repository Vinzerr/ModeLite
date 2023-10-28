import {
    Client,
    BaseChat,
    MembersManager,
    type BasePacket
} from '../../index'

export interface BaseGroupPacket extends BasePacket {
    title?: string
    username?: string
    active_usernames?: Array<string>
    can_set_sticker_set?: boolean
}

export class BaseGroupChat extends BaseChat {

    public members: MembersManager
    constructor(client: Client, packet: BaseGroupPacket){
        super(client, packet)

        this.members = new MembersManager(this)

    }

}