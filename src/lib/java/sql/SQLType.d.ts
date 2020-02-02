export default interface SQLType {
    getVendor(): string;
    getVendorTypeNumber(): any;
    getName(): string;
}
export default class SQLType {
    static get $javaClass(): any;
}
