declare var Java: any;
import Wrapper from '../../java/sql/Wrapper.js'

export default interface ResultSetMetaData {
	getCatalogName(arg0: number): string;
	getColumnClassName(arg0: number): string;
	getColumnCount(): number;
	getColumnDisplaySize(arg0: number): number;
	getColumnLabel(arg0: number): string;
	getColumnName(arg0: number): string;
	getColumnType(arg0: number): number;
	getColumnTypeName(arg0: number): string;
	getPrecision(arg0: number): number;
	getScale(arg0: number): number;
	getSchemaName(arg0: number): string;
	getTableName(arg0: number): string;
	isAutoIncrement(arg0: number): boolean;
	isCaseSensitive(arg0: number): boolean;
	isCurrency(arg0: number): boolean;
	isDefinitelyWritable(arg0: number): boolean;
	isNullable(arg0: number): number;
	isReadOnly(arg0: number): boolean;
	isSearchable(arg0: number): boolean;
	isSigned(arg0: number): boolean;
	isWrapperFor(arg0: any): boolean;
	isWritable(arg0: number): boolean;
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

