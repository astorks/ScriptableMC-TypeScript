export default interface Struct {
    getSQLTypeName(): string;
    getAttributes(): Array<any>;
    getAttributes(arg0: any): Array<any>;
}
export default class Struct {
    static get $javaClass(): any;
}
