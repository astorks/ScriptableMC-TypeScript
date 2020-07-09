declare var Java: any;
import Blob from './Blob.js'
import Clob from './Clob.js'
import Date from './Date.js'
import InputStream from '../../java/io/InputStream.js'
import NClob from './NClob.js'
import Reader from '../../java/io/Reader.js'
import Ref from './Ref.js'
import ResultSetMetaData from './ResultSetMetaData.js'
import RowId from './RowId.js'
import SQLType from './SQLType.js'
import SQLWarning from './SQLWarning.js'
import SQLXML from './SQLXML.js'
import Statement from './Statement.js'
import Time from './Time.js'
import Timestamp from './Timestamp.js'
import Wrapper from './Wrapper.js'
import _Array from './Array.js'

export default interface ResultSet extends Wrapper {
	absolute(arg0: number): boolean;
	afterLast(): void;
	beforeFirst(): void;
	cancelRowUpdates(): void;
	clearWarnings(): void;
	close(): void;
	deleteRow(): void;
	findColumn(arg0: string): number;
	first(): boolean;
	getArray(arg0: number): _Array;
	getArray(arg0: string): _Array;
	getAsciiStream(arg0: string): InputStream;
	getAsciiStream(arg0: number): InputStream;
	getBigDecimal(arg0: number): any;
	getBigDecimal(arg0: string): any;
	getBigDecimal(arg0: string, arg1: number): any;
	getBigDecimal(arg0: number, arg1: number): any;
	getBinaryStream(arg0: string): InputStream;
	getBinaryStream(arg0: number): InputStream;
	getBlob(arg0: number): Blob;
	getBlob(arg0: string): Blob;
	getBoolean(arg0: string): boolean;
	getBoolean(arg0: number): boolean;
	getByte(arg0: string): number;
	getByte(arg0: number): number;
	getBytes(arg0: number): Array<number>;
	getBytes(arg0: string): Array<number>;
	getCharacterStream(arg0: number): Reader;
	getCharacterStream(arg0: string): Reader;
	getClob(arg0: string): Clob;
	getClob(arg0: number): Clob;
	getConcurrency(): number;
	getCursorName(): string;
	getDate(arg0: string): Date;
	getDate(arg0: number): Date;
	getDate(arg0: string, arg1: any): Date;
	getDate(arg0: number, arg1: any): Date;
	getDouble(arg0: number): number;
	getDouble(arg0: string): number;
	getFetchDirection(): number;
	getFetchSize(): number;
	getFloat(arg0: string): number;
	getFloat(arg0: number): number;
	getHoldability(): number;
	getInt(arg0: string): number;
	getInt(arg0: number): number;
	getLong(arg0: string): number;
	getLong(arg0: number): number;
	getMetaData(): ResultSetMetaData;
	getNCharacterStream(arg0: string): Reader;
	getNCharacterStream(arg0: number): Reader;
	getNClob(arg0: number): NClob;
	getNClob(arg0: string): NClob;
	getNString(arg0: string): string;
	getNString(arg0: number): string;
	getObject(arg0: number): any;
	getObject(arg0: string): any;
	getObject(arg0: string, arg1: any): any;
	getObject(arg0: number, arg1: any): any;
	getObject(arg0: string, arg1: any): any;
	getObject(arg0: number, arg1: any): any;
	getRef(arg0: string): Ref;
	getRef(arg0: number): Ref;
	getRow(): number;
	getRowId(arg0: number): RowId;
	getRowId(arg0: string): RowId;
	getSQLXML(arg0: number): SQLXML;
	getSQLXML(arg0: string): SQLXML;
	getShort(arg0: string): number;
	getShort(arg0: number): number;
	getStatement(): Statement;
	getString(arg0: number): string;
	getString(arg0: string): string;
	getTime(arg0: string): Time;
	getTime(arg0: number): Time;
	getTime(arg0: string, arg1: any): Time;
	getTime(arg0: number, arg1: any): Time;
	getTimestamp(arg0: string): Timestamp;
	getTimestamp(arg0: number): Timestamp;
	getTimestamp(arg0: string, arg1: any): Timestamp;
	getTimestamp(arg0: number, arg1: any): Timestamp;
	getType(): number;
	getURL(arg0: string): any;
	getURL(arg0: number): any;
	getUnicodeStream(arg0: string): InputStream;
	getUnicodeStream(arg0: number): InputStream;
	getWarnings(): SQLWarning;
	insertRow(): void;
	isAfterLast(): boolean;
	isBeforeFirst(): boolean;
	isClosed(): boolean;
	isFirst(): boolean;
	isLast(): boolean;
	isWrapperFor(arg0: any): boolean;
	last(): boolean;
	moveToCurrentRow(): void;
	moveToInsertRow(): void;
	next(): boolean;
	previous(): boolean;
	refreshRow(): void;
	relative(arg0: number): boolean;
	rowDeleted(): boolean;
	rowInserted(): boolean;
	rowUpdated(): boolean;
	setFetchDirection(arg0: number): void;
	setFetchSize(arg0: number): void;
	unwrap(arg0: any): any;
	updateArray(arg0: number, arg1: _Array): void;
	updateArray(arg0: string, arg1: _Array): void;
	updateAsciiStream(arg0: string, arg1: InputStream): void;
	updateAsciiStream(arg0: number, arg1: InputStream): void;
	updateAsciiStream(arg0: string, arg1: InputStream, arg2: number): void;
	updateAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
	updateAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
	updateAsciiStream(arg0: string, arg1: InputStream, arg2: number): void;
	updateBigDecimal(arg0: string, arg1: any): void;
	updateBigDecimal(arg0: number, arg1: any): void;
	updateBinaryStream(arg0: string, arg1: InputStream): void;
	updateBinaryStream(arg0: number, arg1: InputStream): void;
	updateBinaryStream(arg0: string, arg1: InputStream, arg2: number): void;
	updateBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
	updateBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
	updateBinaryStream(arg0: string, arg1: InputStream, arg2: number): void;
	updateBlob(arg0: string, arg1: InputStream): void;
	updateBlob(arg0: number, arg1: InputStream): void;
	updateBlob(arg0: number, arg1: Blob): void;
	updateBlob(arg0: string, arg1: Blob): void;
	updateBlob(arg0: string, arg1: InputStream, arg2: number): void;
	updateBlob(arg0: number, arg1: InputStream, arg2: number): void;
	updateBoolean(arg0: number, arg1: boolean): void;
	updateBoolean(arg0: string, arg1: boolean): void;
	updateByte(arg0: number, arg1: number): void;
	updateByte(arg0: string, arg1: number): void;
	updateBytes(arg0: string, arg1: Array<number>): void;
	updateBytes(arg0: number, arg1: Array<number>): void;
	updateCharacterStream(arg0: number, arg1: Reader): void;
	updateCharacterStream(arg0: string, arg1: Reader): void;
	updateCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	updateCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
	updateCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	updateCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
	updateClob(arg0: number, arg1: Reader): void;
	updateClob(arg0: string, arg1: Reader): void;
	updateClob(arg0: number, arg1: Clob): void;
	updateClob(arg0: string, arg1: Clob): void;
	updateClob(arg0: string, arg1: Reader, arg2: number): void;
	updateClob(arg0: number, arg1: Reader, arg2: number): void;
	updateDate(arg0: string, arg1: Date): void;
	updateDate(arg0: number, arg1: Date): void;
	updateDouble(arg0: string, arg1: number): void;
	updateDouble(arg0: number, arg1: number): void;
	updateFloat(arg0: number, arg1: number): void;
	updateFloat(arg0: string, arg1: number): void;
	updateInt(arg0: string, arg1: number): void;
	updateInt(arg0: number, arg1: number): void;
	updateLong(arg0: number, arg1: number): void;
	updateLong(arg0: string, arg1: number): void;
	updateNCharacterStream(arg0: string, arg1: Reader): void;
	updateNCharacterStream(arg0: number, arg1: Reader): void;
	updateNCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	updateNCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
	updateNClob(arg0: number, arg1: NClob): void;
	updateNClob(arg0: string, arg1: NClob): void;
	updateNClob(arg0: number, arg1: Reader): void;
	updateNClob(arg0: string, arg1: Reader): void;
	updateNClob(arg0: number, arg1: Reader, arg2: number): void;
	updateNClob(arg0: string, arg1: Reader, arg2: number): void;
	updateNString(arg0: number, arg1: string): void;
	updateNString(arg0: string, arg1: string): void;
	updateNull(arg0: string): void;
	updateNull(arg0: number): void;
	updateObject(arg0: number, arg1: any): void;
	updateObject(arg0: string, arg1: any): void;
	updateObject(columnIndex: number, x: any, targetSqlType: SQLType): void;
	updateObject(arg0: string, arg1: any, arg2: number): void;
	updateObject(arg0: number, arg1: any, arg2: number): void;
	updateObject(columnLabel: string, x: any, targetSqlType: SQLType): void;
	updateObject(columnLabel: string, x: any, targetSqlType: SQLType, scaleOrLength: number): void;
	updateObject(columnIndex: number, x: any, targetSqlType: SQLType, scaleOrLength: number): void;
	updateRef(arg0: string, arg1: Ref): void;
	updateRef(arg0: number, arg1: Ref): void;
	updateRow(): void;
	updateRowId(arg0: string, arg1: RowId): void;
	updateRowId(arg0: number, arg1: RowId): void;
	updateSQLXML(arg0: string, arg1: SQLXML): void;
	updateSQLXML(arg0: number, arg1: SQLXML): void;
	updateShort(arg0: number, arg1: number): void;
	updateShort(arg0: string, arg1: number): void;
	updateString(arg0: number, arg1: string): void;
	updateString(arg0: string, arg1: string): void;
	updateTime(arg0: number, arg1: Time): void;
	updateTime(arg0: string, arg1: Time): void;
	updateTimestamp(arg0: number, arg1: Timestamp): void;
	updateTimestamp(arg0: string, arg1: Timestamp): void;
	wasNull(): boolean;
}

export default class ResultSet {
	public static get $javaClass(): any {
		return Java.type('java.sql.ResultSet');
	}

	public static get CLOSE_CURSORS_AT_COMMIT(): number {
		return ResultSet.$javaClass.CLOSE_CURSORS_AT_COMMIT;
	}

	public static get CONCUR_READ_ONLY(): number {
		return ResultSet.$javaClass.CONCUR_READ_ONLY;
	}

	public static get CONCUR_UPDATABLE(): number {
		return ResultSet.$javaClass.CONCUR_UPDATABLE;
	}

	public static get FETCH_FORWARD(): number {
		return ResultSet.$javaClass.FETCH_FORWARD;
	}

	public static get FETCH_REVERSE(): number {
		return ResultSet.$javaClass.FETCH_REVERSE;
	}

	public static get FETCH_UNKNOWN(): number {
		return ResultSet.$javaClass.FETCH_UNKNOWN;
	}

	public static get HOLD_CURSORS_OVER_COMMIT(): number {
		return ResultSet.$javaClass.HOLD_CURSORS_OVER_COMMIT;
	}

	public static get TYPE_FORWARD_ONLY(): number {
		return ResultSet.$javaClass.TYPE_FORWARD_ONLY;
	}

	public static get TYPE_SCROLL_INSENSITIVE(): number {
		return ResultSet.$javaClass.TYPE_SCROLL_INSENSITIVE;
	}

	public static get TYPE_SCROLL_SENSITIVE(): number {
		return ResultSet.$javaClass.TYPE_SCROLL_SENSITIVE;
	}

}

