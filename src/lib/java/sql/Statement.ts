declare var Java: any;
import Connection from '../../java/sql/Connection.js'
import ResultSet from '../../java/sql/ResultSet.js'
import SQLWarning from '../../java/sql/SQLWarning.js'
import Wrapper from '../../java/sql/Wrapper.js'

export default interface Statement {
	cancel(): void;
	getWarnings(): SQLWarning;
	clearWarnings(): void;
	executeQuery(arg0: string): ResultSet;
	executeUpdate(arg0: string, arg1: number): number;
	executeUpdate(arg0: string, arg1: Array<number>): number;
	executeUpdate(arg0: string): number;
	executeUpdate(arg0: string, arg1: Array<string>): number;
	getMaxFieldSize(): number;
	setMaxFieldSize(arg0: number): void;
	getMaxRows(): number;
	setMaxRows(arg0: number): void;
	setEscapeProcessing(arg0: boolean): void;
	getQueryTimeout(): number;
	setQueryTimeout(arg0: number): void;
	setCursorName(arg0: string): void;
	getResultSet(): ResultSet;
	getUpdateCount(): number;
	getMoreResults(arg0: number): boolean;
	getMoreResults(): boolean;
	setFetchDirection(arg0: number): void;
	getFetchDirection(): number;
	setFetchSize(arg0: number): void;
	getFetchSize(): number;
	getResultSetConcurrency(): number;
	getResultSetType(): number;
	addBatch(arg0: string): void;
	clearBatch(): void;
	executeBatch(): Array<number>;
	getGeneratedKeys(): ResultSet;
	getResultSetHoldability(): number;
	setPoolable(arg0: boolean): void;
	isPoolable(): boolean;
	closeOnCompletion(): void;
	isCloseOnCompletion(): boolean;
	getLargeUpdateCount(): number;
	setLargeMaxRows(arg0: number): void;
	getLargeMaxRows(): number;
	executeLargeBatch(): Array<number>;
	executeLargeUpdate(arg0: string): number;
	executeLargeUpdate(arg0: string, arg1: Array<number>): number;
	executeLargeUpdate(arg0: string, arg1: number): number;
	executeLargeUpdate(arg0: string, arg1: Array<string>): number;
	getConnection(): Connection;
	isClosed(): boolean;
	execute(arg0: string, arg1: number): boolean;
	execute(arg0: string): boolean;
	execute(arg0: string, arg1: Array<number>): boolean;
	execute(arg0: string, arg1: Array<string>): boolean;
	close(): void;
	isWrapperFor(arg0: any): boolean;
	unwrap(arg0: any): any;
}

export default class Statement {
	public static get $javaClass(): any {
		return Java.type('java.sql.Statement');
	}
	public static get CLOSE_CURRENT_RESULT(): number {
		return Statement.$javaClass.CLOSE_CURRENT_RESULT;
	}
	public static get KEEP_CURRENT_RESULT(): number {
		return Statement.$javaClass.KEEP_CURRENT_RESULT;
	}
	public static get CLOSE_ALL_RESULTS(): number {
		return Statement.$javaClass.CLOSE_ALL_RESULTS;
	}
	public static get SUCCESS_NO_INFO(): number {
		return Statement.$javaClass.SUCCESS_NO_INFO;
	}
	public static get EXECUTE_FAILED(): number {
		return Statement.$javaClass.EXECUTE_FAILED;
	}
	public static get RETURN_GENERATED_KEYS(): number {
		return Statement.$javaClass.RETURN_GENERATED_KEYS;
	}
	public static get NO_GENERATED_KEYS(): number {
		return Statement.$javaClass.NO_GENERATED_KEYS;
	}
}

