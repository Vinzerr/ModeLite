import BaseManager from './BaseManager'
import Client from '../client/Client'
import axios from 'axios'

export interface APIOptions {
    base: string
    token?: string|undefined
}

export interface RequestOptions {
    returnOk?: boolean
    result?: boolean
    lean?: boolean
}

export type AxiosMethod = 'get'|'post'

export default class APIManager extends BaseManager<APIOptions> {

    [key: string]: any
    public constructor(client: Client){
        super(client, 'api', {
            base: 'https://api.telegram.org'
        })

        this.acknowledge('getChat')
        this.acknowledge('getChatMember')
        this.acknowledge('getMe')
        this.acknowledge('getUpdates')
        
        this.acknowledge('sendAudio')
        this.acknowledge('sendAnimation')
        this.acknowledge('sendDocument')
        this.acknowledge('sendMediaGroup')
        this.acknowledge('sentPhoto')
        this.acknowledge('sendMessage')
        this.acknowledge('sendVideo')

        this.acknowledge('banChatMember')
        this.acknowledge('unbanChatMember')

    }

    public acknowledge(method: string): void {
        this[method] = async function(...argumants: any[]): Promise<any> {
            return this.request(this.generate(method), 'post', ...argumants)
        }
    }

    public generate(method: string): string {
        return [this.options.base, this.token, method]
          .map((sequence, index) => [0].includes(index) ? sequence : '/' + sequence)
          .join('')
    }

    public request(URL: string, method: AxiosMethod, ...argumants: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            axios[method](URL, ...argumants)
                .then((response: any) => {
                    response.data.message = `${response.data.code}: ${response.data.description}`
                    if(argumants[1]?.returnOk) return resolve(response.data.ok)
                    if(argumants[1]?.lean) return response.data.ok ?
                       argumants[1].result ?
                            resolve(response.data.result)
                        :   resolve(response.data)
                    :   reject(response.data.message)
                    resolve(response)
                })
                .catch((response: any) => {
                    return Promise.reject(this.client.logger.error(response))
                })
        })
    }

    public setToken(token: typeof this.options.token){
        this.options.token = token
    }

    get token(){
        return `bot` + this.options.token
    }

}