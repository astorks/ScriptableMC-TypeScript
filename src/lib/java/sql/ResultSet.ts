declare var Java: any;
import Blob from '../../java/sql/Blob.js'
import Clob from '../../java/sql/Clob.js'
import Date from '../../java/sql/Date.js'
import InputStream from '../../java/io/InputStream.js'
import NClob from '../../java/sql/NClob.js'
import Reader from '../../java/io/Reader.js'
import Ref from '../../java/sql/Ref.js'
import ResultSetMetaData from '../../java/sql/ResultSetMetaData.js'
import RowId from '../../java/sql/RowId.js'
import SQLType from '../../java/sql/SQLType.js'
import SQLWarning from '../../java/sql/SQLWarning.js'
import SQLXML from '../../java/sql/SQLXML.js'
import Statement from '../../java/sql/Statement.js'
import Time from '../../java/sql/Time.js'
import Timestamp from '../../java/sql/Timestamp.js'
import Wrapper from '../../java/sql/Wrapper.js'
import _Array from '../../java/sql/Array.js'

export default interface ResultSet {
	getMetaData(): ResultSetMetaData;
	getWarnings(): SQLWarning;
	clearWarnings(): void;
	getHoldability(): number;
	setFetchDirection(arg0: number): void;
	getFetchDirection(): number;
	setFetchSize(arg0: number): void;
	getFetchSize(): number;
	wasNull(): boolean;
	getBigDecimal(arg0: number): any;
	getBigDecimal(arg0: string): any;
	getBigDecimal(arg0: string, arg1: number): any;
	getBigDecimal(arg0: number, arg1: number): any;
	getTimestamp(arg0: number, arg1: any): Timestamp;
	getTimestamp(arg0: number): Timestamp;
	getTimestamp(arg0: string): Timestamp;
	getTimestamp(arg0: string, arg1: any): Timestamp;
	getBlob(arg0: number): Blob;
	getBlob(arg0: string): Blob;
	getClob(arg0: number): Clob;
	getClob(arg0: string): Clob;
	getRowId(arg0: number): RowId;
	getRowId(arg0: string): RowId;
	getNClob(arg0: string): NClob;
	getNClob(arg0: number): NClob;
	getSQLXML(arg0: string): SQLXML;
	getSQLXML(arg0: number): SQLXML;
	getNString(arg0: number): string;
	getNString(arg0: string): string;
	getNCharacterStream(arg0: number): Reader;
	getNCharacterStream(arg0: string): Reader;
	getCharacterStream(arg0: number): Reader;
	getCharacterStream(arg0: string): Reader;
	getAsciiStream(arg0: number): InputStream;
	getAsciiStream(arg0: string): InputStream;
	getBinaryStream(arg0: string): InputStream;
	getBinaryStream(arg0: number): InputStream;
	getString(arg0: string): string;
	getString(arg0: number): string;
	getTime(arg0: string): Time;
	getTime(arg0: number, arg1: any): Time;
	getTime(arg0: number): Time;
	getTime(arg0: string, arg1: any): Time;
	getDate(arg0: number, arg1: any): Date;
	getDate(arg0: string): Date;
	getDate(arg0: string, arg1: any): Date;
	getDate(arg0: number): Date;
	last(): boolean;
	isClosed(): boolean;
	isFirst(): boolean;
	isLast(): boolean;
	getRow(): number;
	updateTime(arg0: number, arg1: Time): void;
	updateTime(arg0: string, arg1: Time): void;
	getUnicodeStream(arg0: string): InputStream;
	getUnicodeStream(arg0: number): InputStream;
	getCursorName(): string;
	findColumn(arg0: string): number;
	isBeforeFirst(): boolean;
	isAfterLast(): boolean;
	beforeFirst(): void;
	afterLast(): void;
	absolute(arg0: number): boolean;
	relative(arg0: number): boolean;
	getConcurrency(): number;
	rowUpdated(): boolean;
	rowInserted(): boolean;
	rowDeleted(): boolean;
	updateNull(arg0: string): void;
	updateNull(arg0: number): void;
	updateBoolean(arg0: string, arg1: boolean): void;
	updateBoolean(arg0: number, arg1: boolean): void;
	updateByte(arg0: string, arg1: number): void;
	updateByte(arg0: number, arg1: number): void;
	updateShort(arg0: number, arg1: number): void;
	updateShort(arg0: string, arg1: number): void;
	updateInt(arg0: number, arg1: number): void;
	updateInt(arg0: string, arg1: number): void;
	updateLong(arg0: number, arg1: number): void;
	updateLong(arg0: string, arg1: number): void;
	updateFloat(arg0: number, arg1: number): void;
	updateFloat(arg0: string, arg1: number): void;
	updateDouble(arg0: number, arg1: number): void;
	updateDouble(arg0: string, arg1: number): void;
	updateBigDecimal(arg0: number, arg1: any): void;
	updateBigDecimal(arg0: string, arg1: any): void;
	updateString(arg0: string, arg1: string): void;
	updateString(arg0: number, arg1: string): void;
	updateDate(arg0: string, arg1: Date): void;
	updateDate(arg0: number, arg1: Date): void;
	updateTimestamp(arg0: number, arg1: Timestamp): void;
	updateTimestamp(arg0: string, arg1: Timestamp): void;
	updateAsciiStream(arg0: string, arg1: InputStream): void;
	updateAsciiStream(arg0: string, arg1: InputStream, arg2: number): void;
	updateAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
	updateAsciiStream(arg0: string, arg1: InputStream, arg2: number): void;
	updateAsciiStream(arg0: number, arg1: InputStream): void;
	updateAsciiStream(arg0: number, arg1: InputStream, arg2: number): void;
	updateBinaryStream(arg0: number, arg1: InputStream): void;
	updateBinaryStream(arg0: string, arg1: InputStream, arg2: number): void;
	updateBinaryStream(arg0: string, arg1: InputStream): void;
	updateBinaryStream(arg0: string, arg1: InputStream, arg2: number): void;
	updateBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
	updateBinaryStream(arg0: number, arg1: InputStream, arg2: number): void;
	updateCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
	updateCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
	updateCharacterStream(arg0: number, arg1: Reader): void;
	updateCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	updateCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	updateCharacterStream(arg0: string, arg1: Reader): void;
	updateObject(arg0: string, arg1: any, arg2: SQLType): void;
	updateObject(arg0: number, arg1: any, arg2: SQLType, arg3: number): void;
	updateObject(arg0: string, arg1: any, arg2: SQLType, arg3: number): void;
	updateObject(arg0: number, arg1: any, arg2: SQLType): void;
	updateObject(arg0: string, arg1: any): void;
	updateObject(arg0: string, arg1: any, arg2: number): void;
	updateObject(arg0: number, arg1: any): void;
	updateObject(arg0: number, arg1: any, arg2: number): void;
	insertRow(): void;
	updateRow(): void;
	deleteRow(): void;
	refreshRow(): void;
	cancelRowUpdates(): void;
	moveToInsertRow(): void;
	moveToCurrentRow(): void;
	getStatement(): Statement;
	updateRef(arg0: number, arg1: Ref): void;
	updateRef(arg0: string, arg1: Ref): void;
	updateBlob(arg0: string, arg1: Blob): void;
	updateBlob(arg0: number, arg1: Blob): void;
	updateBlob(arg0: string, arg1: InputStream, arg2: number): void;
	updateBlob(arg0: number, arg1: InputStream, arg2: number): void;
	updateBlob(arg0: number, arg1: InputStream): void;
	updateBlob(arg0: string, arg1: InputStream): void;
	updateClob(arg0: number, arg1: Reader): void;
	updateClob(arg0: string, arg1: Clob): void;
	updateClob(arg0: string, arg1: Reader, arg2: number): void;
	updateClob(arg0: number, arg1: Clob): void;
	updateClob(arg0: string, arg1: Reader): void;
	updateClob(arg0: number, arg1: Reader, arg2: number): void;
	updateArray(arg0: string, arg1: _Array): void;
	updateArray(arg0: number, arg1: _Array): void;
	updateRowId(arg0: number, arg1: RowId): void;
	updateRowId(arg0: string, arg1: RowId): void;
	updateNString(arg0: number, arg1: string): void;
	updateNString(arg0: string, arg1: string): void;
	updateNClob(arg0: number, arg1: Reader): void;
	updateNClob(arg0: string, arg1: Reader, arg2: number): void;
	updateNClob(arg0: string, arg1: Reader): void;
	updateNClob(arg0: number, arg1: Reader, arg2: number): void;
	updateNClob(arg0: number, arg1: NClob): void;
	updateNClob(arg0: string, arg1: NClob): void;
	updateSQLXML(arg0: string, arg1: SQLXML): void;
	updateSQLXML(arg0: number, arg1: SQLXML): void;
	updateNCharacterStream(arg0: number, arg1: Reader, arg2: number): void;
	updateNCharacterStream(arg0: number, arg1: Reader): void;
	updateNCharacterStream(arg0: string, arg1: Reader, arg2: number): void;
	updateNCharacterStream(arg0: string, arg1: Reader): void;
	updateBytes(arg0: string, arg1: Array<number>): void;
	updateBytes(arg0: number, arg1: Array<number>): void;
	getObject(arg0: string, arg1: any): any;
	getObject(arg0: number, arg1: any): any;
	getObject(arg0: number, arg1: any): any;
	getObject(arg0: number): any;
	getObject(arg0: string): any;
	getObject(arg0: string, arg1: any): any;
	getBoolean(arg0: string): boolean;
	getBoolean(arg0: number): boolean;
	getByte(arg0: string): number;
	getByte(arg0: number): number;
	getShort(arg0: string): number;
	getShort(arg0: number): number;
	getInt(arg0: string): number;
	getInt(arg0: number): number;
	getLong(arg0: string): number;
	getLong(arg0: number): number;
	getFloat(arg0: number): number;
	getFloat(arg0: string): number;
	getDouble(arg0: number): number;
	getDouble(arg0: string): number;
	getBytes(arg0: string): Array<number>;
	getBytes(arg0: number): Array<number>;
	next(): boolean;
	getArray(arg0: string): _Array;
	getArray(arg0: number): _Array;
	getURL(arg0: string): any;
	getURL(arg0: number): any;
	first(): boolean;
	close(): void;
	getType(): number;
	getRef(arg0: string): Ref;
	getRef(arg0: number): Ref;
	previous(): boolean;
	isWrapperFor(arg0: any): boolean;
	unwrap(arg0: any): any;
}

export default class ResultSet {
	public static get $javaClass(): any {
		return Java.type('java.sql.ResultSet');
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
	public static get TYPE_FORWARD_ONLY(): number {
		return ResultSet.$javaClass.TYPE_FORWARD_ONLY;
	}
	public static get TYPE_SCROLL_INSENSITIVE(): number {
		return ResultSet.$javaClass.TYPE_SCROLL_INSENSITIVE;
	}
	public static get TYPE_SCROLL_SENSITIVE(): number {
		return ResultSet.$javaClass.TYPE_SCROLL_SENSITIVE;
	}
	public static get CONCUR_READ_ONLY(): number {
		return ResultSet.$javaClass.CONCUR_READ_ONLY;
	}
	public static get CONCUR_UPDATABLE(): number {
		return ResultSet.$javaClass.CONCUR_UPDATABLE;
	}
	public static get HOLD_CURSORS_OVER_COMMIT(): number {
		return ResultSet.$javaClass.HOLD_CURSORS_OVER_COMMIT;
	}
	public static get CLOSE_CURSORS_AT_COMMIT(): number {
		return ResultSet.$javaClass.CLOSE_CURSORS_AT_COMMIT;
	}
}

