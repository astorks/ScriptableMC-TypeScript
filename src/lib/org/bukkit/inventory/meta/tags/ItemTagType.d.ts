import ItemTagAdapterContext from '../../../../../org/bukkit/inventory/meta/tags/ItemTagAdapterContext.js';
export default interface ItemTagType {
    getComplexType(): any;
    fromPrimitive(arg0: any, arg1: ItemTagAdapterContext): any;
    toPrimitive(arg0: any, arg1: ItemTagAdapterContext): any;
    getPrimitiveType(): any;
}
export default class ItemTagType {
    static get $javaClass(): any;
    static get BYTE(): ItemTagType;
    static get SHORT(): ItemTagType;
    static get INTEGER(): ItemTagType;
    static get LONG(): ItemTagType;
    static get FLOAT(): ItemTagType;
    static get DOUBLE(): ItemTagType;
    static get STRING(): ItemTagType;
    static get BYTE_ARRAY(): ItemTagType;
    static get INTEGER_ARRAY(): ItemTagType;
    static get LONG_ARRAY(): ItemTagType;
    static get TAG_CONTAINER(): ItemTagType;
}
