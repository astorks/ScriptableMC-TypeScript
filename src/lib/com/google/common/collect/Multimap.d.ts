import { Multiset } from '../../../../com/google/common/collect/Multiset.js';
export interface Multimap {
    asMap(): any;
    replaceValues(arg0: any, arg1: any): any;
    containsEntry(arg0: any, arg1: any): boolean;
    remove(arg0: any, arg1: any): boolean;
    get(arg0: any): any;
    put(arg0: any, arg1: any): boolean;
    values(): any;
    clear(): void;
    isEmpty(): boolean;
    size(): number;
    putAll(arg0: any, arg1: any): boolean;
    putAll(arg0: Multimap): boolean;
    forEach(action: any): void;
    keys(): Multiset;
    keySet(): any;
    containsValue(arg0: any): boolean;
    containsKey(arg0: any): boolean;
    entries(): any;
    removeAll(arg0: any): any;
}
export declare class Multimap {
    static get $javaClass(): any;
}
