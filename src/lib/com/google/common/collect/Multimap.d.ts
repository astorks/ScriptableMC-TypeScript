import Multiset from '../../../../com/google/common/collect/Multiset.js';
export default interface Multimap {
    remove(arg0: any, arg1: any): boolean;
    get(arg0: any): any;
    put(arg0: any, arg1: any): boolean;
    values(): any;
    clear(): void;
    isEmpty(): boolean;
    size(): number;
    putAll(arg0: Multimap): boolean;
    putAll(arg0: any, arg1: any): boolean;
    forEach(action: any): void;
    containsKey(arg0: any): boolean;
    keys(): Multiset;
    containsValue(arg0: any): boolean;
    keySet(): any;
    entries(): any;
    removeAll(arg0: any): any;
    asMap(): any;
    replaceValues(arg0: any, arg1: any): any;
    containsEntry(arg0: any, arg1: any): boolean;
}
export default class Multimap {
    static get $javaClass(): any;
}
