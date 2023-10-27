/// <reference types="node" />
import { EventEmitter } from "node:events";
export default class Base extends EventEmitter {
    constructor();
    defaults(defaults: any, context?: any): any;
}
