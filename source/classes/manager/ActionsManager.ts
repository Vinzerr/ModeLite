import BaseManager from './BaseManager'
import Client from '../client/Client'

export default class ActionsManager extends BaseManager {

    [key: string]: any
    public constructor(client: Client){
        super(client)

        this.register(require('../actions/Message').default)
    }

    public register(context_piece: any): void {
        this[context_piece.name.replace(/Action$/, '').toLowerCase()] = new context_piece(this.client)
    }

}