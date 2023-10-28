/// <reference types="node" />
import { EventEmitter } from "node:events";
export declare class Base extends EventEmitter {
    constructor();
    defaults(defaults: any, context?: any): any;
}
