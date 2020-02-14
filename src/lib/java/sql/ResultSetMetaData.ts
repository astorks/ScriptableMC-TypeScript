declare var Java: any;
import Wrapper from '../../java/sql/Wrapper.js'

export default interface ResultSetMetaData {
	getScale(arg0: number): number;
	getColumnCount(): number;
	isAutoIncrement(arg0: number): boolean;
	isCaseSensitive(arg0: number): boolean;
	isSearchable(arg0: number): boolean;
	isCurrency(arg0: number): boolean;
	isNullable(arg0: number): number;
	isSigned(arg0: number): boolean;
	getColumnDisplaySize(arg0: number): number;
	getColumnLabel(arg0: number): string;
	getColumnName(arg0: number): string;
	getSchemaName(arg0: number): string;
	getPrecision(arg0: number): number;
	getTableName(arg0: number): string;
	getCatalogName(arg0: number): string;
	getColumnType(arg0: number): number;
	getColumnTypeName(arg0: number): string;
	isWritable(arg0: number): boolean;
	isDefinitelyWritable(arg0: number): boolean;
	getColumnClassName(arg0: number): string;
	isReadOnly(arg0: number): boolean;
	isWrapperFor(arg0: any): boolean;
	unwrap(arg0: any): any;
}

export default class ResultSetMetaData {
	public static get $javaClass(): any {
		return Java.type('java.sql.ResultSetMetaData');
	}
	public static get columnNoNulls(): number {
		return ResultSetMetaData.$javaClass.columnNoNulls;
	}
	public static get columnNullable(): number {
		return ResultSetMetaData.$javaClass.columnNullable;
	}
	public static get columnNullableUnknown(): number {
		return ResultSetMetaData.$javaClass.columnNullableUnknown;
	}
}

