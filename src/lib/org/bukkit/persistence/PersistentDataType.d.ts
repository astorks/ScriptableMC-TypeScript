import { PersistentDataAdapterContext } from '../../../org/bukkit/persistence/PersistentDataAdapterContext.js';
export interface PersistentDataType {
    getPrimitiveType(): any;
    getComplexType(): any;
    toPrimitive(arg0: any, arg1: PersistentDataAdapterContext): any;
    fromPrimitive(arg0: any, arg1: PersistentDataAdapterContext): any;
}
export declare class PersistentDataType {
    static get $javaClass(): any;
    static get BYTE(): PersistentDataType;
    static get SHORT(): PersistentDataType;
    static get INTEGER(): PersistentDataType;
    static get LONG(): PersistentDataType;
    static get FLOAT(): PersistentDataType;
    static get DOUBLE(): PersistentDataType;
    static get STRING(): PersistentDataType;
    static get BYTE_ARRAY(): PersistentDataType;
    static get INTEGER_ARRAY(): PersistentDataType;
    static get LONG_ARRAY(): PersistentDataType;
    static get TAG_CONTAINER(): PersistentDataType;
}
