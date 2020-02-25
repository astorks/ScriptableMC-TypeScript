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
import ShardingKey from '../../java/sql/ShardingKey.js'
import Statement from '../../java/sql/Statement.js'
import Struct from '../../java/sql/Struct.js'
import Wrapper from '../../java/sql/Wrapper.js'
import _Array from '../../java/sql/Array.js'

export default interface Connection {
	abort(arg0: any): void;
	beginRequest(): void;
	clearWarnings(): void;
	close(): void;
	commit(): void;
	createArrayOf(arg0: string, arg1: Array<any>): _Array;
	createBlob(): Blob;
	createClob(): Clob;
	createNClob(): NClob;
	createSQLXML(): SQLXML;
	createStatement(): Statement;
	createStatement(arg0: number, arg1: number): Statement;
	createStatement(arg0: number, arg1: number, arg2: number): Statement;
	createStruct(arg0: string, arg1: Array<any>): Struct;
	endRequest(): void;
	getAutoCommit(): boolean;
	getCatalog(): string;
	getClientInfo(): any;
	getClientInfo(arg0: string): string;
	getHoldability(): number;
	getMetaData(): DatabaseMetaData;
	getNetworkTimeout(): number;
	getSchema(): string;
	getTransactionIsolation(): number;
	getTypeMap(): any;
	getWarnings(): SQLWarning;
	isClosed(): boolean;
	isReadOnly(): boolean;
	isValid(arg0: number): boolean;
	isWrapperFor(arg0: any): boolean;
	nativeSQL(arg0: string): string;
	prepareCall(arg0: string): CallableStatement;
	prepareCall(arg0: string, arg1: number, arg2: number): CallableStatement;
	prepareCall(arg0: string, arg1: number, arg2: number, arg3: number): CallableStatement;
	prepareStatement(arg0: string): PreparedStatement;
	prepareStatement(arg0: string, arg1: Array<number>): PreparedStatement;
	prepareStatement(arg0: string, arg1: number): PreparedStatement;
	prepareStatement(arg0: string, arg1: Array<string>): PreparedStatement;
	prepareStatement(arg0: string, arg1: number, arg2: number): PreparedStatement;
	prepareStatement(arg0: string, arg1: number, arg2: number, arg3: number): PreparedStatement;
	releaseSavepoint(arg0: Savepoint): void;
	rollback(): void;
	rollback(arg0: Savepoint): void;
	setAutoCommit(arg0: boolean): void;
	setCatalog(arg0: string): void;
	setClientInfo(arg0: any): void;
	setClientInfo(arg0: string, arg1: string): void;
	setHoldability(arg0: number): void;
	setNetworkTimeout(arg0: any, arg1: number): void;
	setReadOnly(arg0: boolean): void;
	setSavepoint(): Savepoint;
	setSavepoint(arg0: string): Savepoint;
	setSchema(arg0: string): void;
	setShardingKey(shardingKey: ShardingKey): void;
	setShardingKey(shardingKey: ShardingKey, superShardingKey: ShardingKey): void;
	setShardingKeyIfValid(shardingKey: ShardingKey, timeout: number): boolean;
	setShardingKeyIfValid(shardingKey: ShardingKey, superShardingKey: ShardingKey, timeout: number): boolean;
	setTransactionIsolation(arg0: number): void;
	setTypeMap(arg0: any): void;
	unwrap(arg0: any): any;
}

export default class Connection {
	public static get $javaClass(): any {
		return Java.type('java.sql.Connection');
	}

	public static get TRANSACTION_NONE(): number {
		return Connection.$javaClass.TRANSACTION_NONE;
	}

	public static get TRANSACTION_READ_COMMITTED(): number {
		return Connection.$javaClass.TRANSACTION_READ_COMMITTED;
	}

	public static get TRANSACTION_READ_UNCOMMITTED(): number {
		return Connection.$javaClass.TRANSACTION_READ_UNCOMMITTED;
	}

	public static get TRANSACTION_REPEATABLE_READ(): number {
		return Connection.$javaClass.TRANSACTION_REPEATABLE_READ;
	}

	public static get TRANSACTION_SERIALIZABLE(): number {
		return Connection.$javaClass.TRANSACTION_SERIALIZABLE;
	}

}

