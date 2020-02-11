import ObjectStreamField from '../../java/io/ObjectStreamField.js';
export default interface ObjectStreamClass {
    getName(): string;
    getFields(): Array<ObjectStreamField>;
    getField(_name: string): ObjectStreamField;
    forClass(): any;
    getSerialVersionUID(): number;
}
export default class ObjectStreamClass {
    static get $javaClass(): any;
    static get NO_FIELDS(): Array<ObjectStreamField>;
    static lookup(cl: any): ObjectStreamClass;
    static lookupAny(cl: any): ObjectStreamClass;
}
