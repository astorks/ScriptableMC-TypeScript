import Blob from '../../java/sql/Blob.js';
import CallableStatement from '../../java/sql/CallableStatement.js';
import Clob from '../../java/sql/Clob.js';
import DatabaseMetaData from '../../java/sql/DatabaseMetaData.js';
import NClob from '../../java/sql/NClob.js';
import PreparedStatement from '../../java/sql/PreparedStatement.js';
import SQLWarning from '../../java/sql/SQLWarning.js';
import SQLXML from '../../java/sql/SQLXML.js';
import Savepoint from '../../java/sql/Savepoint.js';
import ShardingKey from '../../java/sql/ShardingKey.js';
import Statement from '../../java/sql/Statement.js';
import Struct from '../../java/sql/Struct.js';
import _Array from '../../java/sql/Array.js';
export default interface Connection {
    setReadOnly(arg0: boolean): void;
    close(): void;
    isReadOnly(): boolean;
    abort(arg0: any): void;
    createStatement(): Statement;
    createStatement(arg0: number, arg1: number): Statement;
    createStatement(arg0: number, arg1: number, arg2: number): Statement;
    prepareStatement(arg0: string, arg1: number): PreparedStatement;
    prepareStatement(arg0: string, arg1: Array<number>): PreparedStatement;
    prepareStatement(arg0: string, arg1: number, arg2: number, arg3: number): PreparedStatement;
    prepareStatement(arg0: string, arg1: Array<string>): PreparedStatement;
    prepareStatement(arg0: string, arg1: number, arg2: number): PreparedStatement;
    prepareStatement(arg0: string): PreparedStatement;
    isClosed(): boolean;
    isValid(arg0: number): boolean;
    setTransactionIsolation(arg0: number): void;
    setShardingKeyIfValid(shardingKey: ShardingKey, timeout: number): boolean;
    setShardingKeyIfValid(shardingKey: ShardingKey, superShardingKey: ShardingKey, timeout: number): boolean;
    getTransactionIsolation(): number;
    getNetworkTimeout(): number;
    getAutoCommit(): boolean;
    commit(): void;
    rollback(arg0: Savepoint): void;
    rollback(): void;
    getTypeMap(): any;
    createStruct(arg0: string, arg1: Array<any>): Struct;
    setNetworkTimeout(arg0: any, arg1: number): void;
    setTypeMap(arg0: any): void;
    getHoldability(): number;
    createSQLXML(): SQLXML;
    getWarnings(): SQLWarning;
    setHoldability(arg0: number): void;
    setSavepoint(): Savepoint;
    setSavepoint(arg0: string): Savepoint;
    prepareCall(arg0: string): CallableStatement;
    prepareCall(arg0: string, arg1: number, arg2: number): CallableStatement;
    prepareCall(arg0: string, arg1: number, arg2: number, arg3: number): CallableStatement;
    getClientInfo(arg0: string): string;
    getClientInfo(): any;
    createArrayOf(arg0: string, arg1: Array<any>): _Array;
    clearWarnings(): void;
    getCatalog(): string;
    nativeSQL(arg0: string): string;
    releaseSavepoint(arg0: Savepoint): void;
    createBlob(): Blob;
    setSchema(arg0: string): void;
    getSchema(): string;
    setAutoCommit(arg0: boolean): void;
    createClob(): Clob;
    setCatalog(arg0: string): void;
    getMetaData(): DatabaseMetaData;
    createNClob(): NClob;
    setClientInfo(arg0: any): void;
    setClientInfo(arg0: string, arg1: string): void;
    setShardingKey(shardingKey: ShardingKey, superShardingKey: ShardingKey): void;
    setShardingKey(shardingKey: ShardingKey): void;
    beginRequest(): void;
    endRequest(): void;
    unwrap(arg0: any): any;
    isWrapperFor(arg0: any): boolean;
}
export default class Connection {
    static get $javaClass(): any;
    static get TRANSACTION_NONE(): number;
    static get TRANSACTION_READ_UNCOMMITTED(): number;
    static get TRANSACTION_READ_COMMITTED(): number;
    static get TRANSACTION_REPEATABLE_READ(): number;
    static get TRANSACTION_SERIALIZABLE(): number;
}