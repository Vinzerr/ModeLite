import { EventEmitter } from "node:events"

export default class Base extends EventEmitter {

    public constructor(){
        super({ captureRejections: true })
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