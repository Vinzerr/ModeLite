import {
    Client,
    PartialTypes
} from '../../index'

export class GenericAction {

    public client: Client
    public constructor(client: Client){
        this.client = client
    }

    public handle(packet: any): any {
        return packet
    }

    public get partials(){
        return {
            channel: (packet: any): any => {
                return this.payload(packet, this.client.chats, String(packet.id), PartialTypes.Channel)
            }
        }
    }

    public payload(packet: any, manager: any, id: any, partial_type: PartialTypes): any {
        return manager._add(packet, this.client.options.partials?.some((partial: any ) => partial === partial_type), { id })
    }
    
}