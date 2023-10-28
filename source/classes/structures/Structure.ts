import {
    Client
} from '../../index'

export class Structure {

    public client: Client
    public constructor(client: Client){
        this.client = client
    }

    public _patch(packet: unknown): unknown {
        return packet
    }

    public _clone(): this {
        return Object.assign(Object.create(this), this)
    }

    public defaults(defaults: any, context: any = this): any {
        for(const key in defaults){
            if(!Object.hasOwn(context, key) || context[key] === undefined){
                context[key] = defaults[key]
            } else if(context[key] === Object(context[key])){
                context[key] = this.defaults(defaults[key], context[key])
            }
        }
        return context
    }

}