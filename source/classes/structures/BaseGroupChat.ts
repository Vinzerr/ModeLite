import Client from '../client/Client'
import BaseChat, { type BasePacket } from './BaseChat'
import MembersManager from '../manager/MembersManager'

export interface BaseGroupPacket extends BasePacket {
    title?: string
    username?: string
    active_usernames?: Array<string>
    can_set_sticker_set?: boolean
}

export default class BaseGroupChat extends BaseChat {

    public members: MembersManager
    constructor(client: Client, packet: BaseGroupPacket){
        super(client, packet)

        this.members = new MembersManager(this)

    }

}