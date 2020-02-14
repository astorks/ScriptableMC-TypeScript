declare var Java: any;
import Blob from '../../java/sql/Blob.js'
import CallableStatement from '../../java/sql/CallableStatement.js'
import Clob from '../../java/sql/Clob.js'
import DatabaseMetaData from '../../java/sql/DatabaseMetaData.js'
import NClob from '../../java/sql/NClob.js'
import PreparedStatement from '../../java/sql/PreparedStatement.js'
import SQLWarning from '../../java/sql/SQLWarning.js'
import SQLXML from '../../java/sql/SQLXML.js'
import Savepoint from '../../java/sql/Savepoint.js'
import Statement from '../../java/sql/Statement.js'
import Struct from '../../java/sql/Struct.js'
import Wrapper from '../../java/sql/Wrapper.js'
import _Array from '../../java/sql/Array.js'

export default interface Connection {
	isValid(arg0: number): boolean;
	prepareCall(arg0: string, arg1: number, arg2: number): CallableStatement;
	prepareCall(arg0: string): CallableStatement;
	prepareCall(arg0: string, arg1: number, arg2: number, arg3: number): CallableStatement;
	nativeSQL(arg0: string): string;
	setAutoCommit(arg0: boolean): void;
	getAutoCommit(): boolean;
	commit(): void;
	rollback(arg0: Savepoint): void;
	rollback(): void;
	getMetaData(): DatabaseMetaData;
	setCatalog(arg0: string): void;
	getCatalog(): string;
	setTransactionIsolation(arg0: number): void;
	getTransactionIsolation(): number;
	getWarnings(): SQLWarning;
	clearWarnings(): void;
	getTypeMap(): any;
	setTypeMap(arg0: any): void;
	setHoldability(arg0: number): void;
	getHoldability(): number;
	setSavepoint(arg0: string): Savepoint;
	setSavepoint(): Savepoint;
	releaseSavepoint(arg0: Savepoint): void;
	createClob(): Clob;
	createBlob(): Blob;
	createNClob(): NClob;
	createSQLXML(): SQLXML;
	setClientInfo(arg0: string, arg1: string): void;
	setClientInfo(arg0: any): void;
	getClientInfo(): any;
	getClientInfo(arg0: string): string;
	createArrayOf(arg0: string, arg1: Array<any>): _Array;
	createStruct(arg0: string, arg1: Array<any>): Struct;
	setSchema(arg0: string): void;
	getSchema(): string;
	setNetworkTimeout(arg0: any, arg1: number): void;
	getNetworkTimeout(): number;
	abort(arg0: any): void;
	createStatement(): Statement;
	createStatement(arg0: number, arg1: number, arg2: number): Statement;
	createStatement(arg0: number, arg1: number): Statement;
	prepareStatement(arg0: string, arg1: Array<number>): PreparedStatement;
	prepareStatement(arg0: string, arg1: Array<string>): PreparedStatement;
	prepareStatement(arg0: string): PreparedStatement;
	prepareStatement(arg0: string, arg1: number): PreparedStatement;
	prepareStatement(arg0: string, arg1: number, arg2: number): PreparedStatement;
	prepareStatement(arg0: string, arg1: number, arg2: number, arg3: number): PreparedStatement;
	isClosed(): boolean;
	setReadOnly(arg0: boolean): void;
	close(): void;
	isReadOnly(): boolean;
	isWrapperFor(arg0: any): boolean;
	unwrap(arg0: any): any;
}

export default class Connection {
	public static get $javaClass(): any {
		return Java.type('java.sql.Connection');
	}
	public static get TRANSACTION_NONE(): number {
		return Connection.$javaClass.TRANSACTION_NONE;
	}
	public static get TRANSACTION_READ_UNCOMMITTED(): number {
		return Connection.$javaClass.TRANSACTION_READ_UNCOMMITTED;
	}
	public static get TRANSACTION_READ_COMMITTED(): number {
		return Connection.$javaClass.TRANSACTION_READ_COMMITTED;
	}
	public static get TRANSACTION_REPEATABLE_READ(): number {
		return Connection.$javaClass.TRANSACTION_REPEATABLE_READ;
	}
	public static get TRANSACTION_SERIALIZABLE(): number {
		return Connection.$javaClass.TRANSACTION_SERIALIZABLE;
	}
}

