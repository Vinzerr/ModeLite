import { Client, Base } from '../../index'

export class BaseManager<OptionType = void> extends Base {

    public client: Client
    public options: OptionType
    public constructor(client: Client, pointer?: string, defaults?: OptionType){
        super()
        this.client = client
        this.options = pointer && defaults ? this.defaults(defaults, client.options[pointer] ?? { }) : undefined
    }

}