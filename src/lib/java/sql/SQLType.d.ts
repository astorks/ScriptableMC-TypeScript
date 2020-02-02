export default interface SQLType {
    getName(): string;
    getVendorTypeNumber(): any;
    getVendor(): string;
}
export default class SQLType {
    static get $javaClass(): any;
}
