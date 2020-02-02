import ResultSet from '../../java/sql/ResultSet.js';
export default interface _Array {
    getResultSet(): ResultSet;
    getResultSet(arg0: number, arg1: number): ResultSet;
    getResultSet(arg0: number, arg1: number, arg2: any): ResultSet;
    getResultSet(arg0: any): ResultSet;
    free(): void;
    getBaseTypeName(): string;
    getBaseType(): number;
    getArray(arg0: number, arg1: number, arg2: any): any;
    getArray(): any;
    getArray(arg0: any): any;
    getArray(arg0: number, arg1: number): any;
}
export default class _Array {
    static get $javaClass(): any;
}
