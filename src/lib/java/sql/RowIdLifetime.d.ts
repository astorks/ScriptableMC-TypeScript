export default interface RowIdLifetime {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class RowIdLifetime {
    static get $javaClass(): any;
    static get ROWID_UNSUPPORTED(): RowIdLifetime;
    static get ROWID_VALID_OTHER(): RowIdLifetime;
    static get ROWID_VALID_SESSION(): RowIdLifetime;
    static get ROWID_VALID_TRANSACTION(): RowIdLifetime;
    static get ROWID_VALID_FOREVER(): RowIdLifetime;
}
