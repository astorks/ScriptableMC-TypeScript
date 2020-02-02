import ResultSet from '../../java/sql/ResultSet.js';
export default interface _Array {
    getArray(arg0: number, arg1: number): any;
    getArray(arg0: any): any;
    getArray(): any;
    getArray(arg0: number, arg1: number, arg2: any): any;
    free(): void;
    getResultSet(arg0: number, arg1: number, arg2: any): ResultSet;
    getResultSet(arg0: any): ResultSet;
    getResultSet(): ResultSet;
    getResultSet(arg0: number, arg1: number): ResultSet;
    getBaseTypeName(): string;
    getBaseType(): number;
}
export default class _Array {
    static get $javaClass(): any;
}
