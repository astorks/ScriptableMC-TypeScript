export default interface SQLType {
    getName(): string;
    getVendor(): string;
    getVendorTypeNumber(): any;
}
export default class SQLType {
    static get $javaClass(): any;
}
