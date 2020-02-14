declare var Java: any;
import ResultSet from '../../java/sql/ResultSet.js'

export default interface _Array {
	free(): void;
	getArray(): any;
	getArray(arg0: any): any;
	getArray(arg0: number, arg1: number): any;
	getArray(arg0: number, arg1: number, arg2: any): any;
	getBaseType(): number;
	getBaseTypeName(): string;
	getResultSet(): ResultSet;
	getResultSet(arg0: any): ResultSet;
	getResultSet(arg0: number, arg1: number): ResultSet;
	getResultSet(arg0: number, arg1: number, arg2: any): ResultSet;
}

export default class _Array {
	public static get $javaClass(): any {
		return Java.type('java.sql.Array');
	}

}

