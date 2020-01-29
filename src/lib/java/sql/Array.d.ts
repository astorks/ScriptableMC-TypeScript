import { ResultSet } from '../../java/sql/ResultSet.js';
export interface _Array {
    free(): void;
    getArray(arg0: any): any;
    getArray(arg0: number, arg1: number): any;
    getArray(arg0: number, arg1: number, arg2: any): any;
    getArray(): any;
    getResultSet(arg0: any): ResultSet;
    getResultSet(arg0: number, arg1: number): ResultSet;
    getResultSet(arg0: number, arg1: number, arg2: any): ResultSet;
    getResultSet(): ResultSet;
    getBaseType(): number;
    getBaseTypeName(): string;
}
export declare class _Array {
    static get $javaClass(): any;
}
