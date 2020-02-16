declare var Java: any;
import Connection from '../../java/sql/Connection.js'
import ResultSet from '../../java/sql/ResultSet.js'
import SQLWarning from '../../java/sql/SQLWarning.js'
import Wrapper from '../../java/sql/Wrapper.js'

export default interface Statement {
	addBatch(arg0: string): void;
	cancel(): void;
	clearBatch(): void;
	clearWarnings(): void;
	close(): void;
	closeOnCompletion(): void;
	enquoteIdentifier(identifier: string, alwaysQuote: boolean): string;
	enquoteLiteral(val: string): string;
	enquoteNCharLiteral(val: string): string;
	execute(arg0: string): boolean;
	execute(arg0: string, arg1: Array<number>): boolean;
	execute(arg0: string, arg1: Array<string>): boolean;
	execute(arg0: string, arg1: number): boolean;
	executeBatch(): Array<number>;
	executeLargeBatch(): Array<number>;
	executeLargeUpdate(sql: string): number;
	executeLargeUpdate(sql: string, columnIndexes: Array<number>): number;
	executeLargeUpdate(sql: string, autoGeneratedKeys: number): number;
	executeLargeUpdate(sql: string, columnNames: Array<string>): number;
	executeQuery(arg0: string): ResultSet;
	executeUpdate(arg0: string): number;
	executeUpdate(arg0: string, arg1: Array<string>): number;
	executeUpdate(arg0: string, arg1: number): number;
	executeUpdate(arg0: string, arg1: Array<number>): number;
	getConnection(): Connection;
	getFetchDirection(): number;
	getFetchSize(): number;
	getGeneratedKeys(): ResultSet;
	getLargeMaxRows(): number;
	getLargeUpdateCount(): number;
	getMaxFieldSize(): number;
	getMaxRows(): number;
	getMoreResults(): boolean;
	getMoreResults(arg0: number): boolean;
	getQueryTimeout(): number;
	getResultSet(): ResultSet;
	getResultSetConcurrency(): number;
	getResultSetHoldability(): number;
	getResultSetType(): number;
	getUpdateCount(): number;
	getWarnings(): SQLWarning;
	isCloseOnCompletion(): boolean;
	isClosed(): boolean;
	isPoolable(): boolean;
	isSimpleIdentifier(identifier: string): boolean;
	isWrapperFor(arg0: any): boolean;
	setCursorName(arg0: string): void;
	setEscapeProcessing(arg0: boolean): void;
	setFetchDirection(arg0: number): void;
	setFetchSize(arg0: number): void;
	setLargeMaxRows(max: number): void;
	setMaxFieldSize(arg0: number): void;
	setMaxRows(arg0: number): void;
	setPoolable(arg0: boolean): void;
	setQueryTimeout(arg0: number): void;
	unwrap(arg0: any): any;
}

export default class Statement {
	public static get $javaClass(): any {
		return Java.type('java.sql.Statement');
	}

	public static get CLOSE_ALL_RESULTS(): number {
		return Statement.$javaClass.CLOSE_ALL_RESULTS;
	}

	public static get CLOSE_CURRENT_RESULT(): number {
		return Statement.$javaClass.CLOSE_CURRENT_RESULT;
	}

	public static get EXECUTE_FAILED(): number {
		return Statement.$javaClass.EXECUTE_FAILED;
	}

	public static get KEEP_CURRENT_RESULT(): number {
		return Statement.$javaClass.KEEP_CURRENT_RESULT;
	}

	public static get NO_GENERATED_KEYS(): number {
		return Statement.$javaClass.NO_GENERATED_KEYS;
	}

	public static get RETURN_GENERATED_KEYS(): number {
		return Statement.$javaClass.RETURN_GENERATED_KEYS;
	}

	public static get SUCCESS_NO_INFO(): number {
		return Statement.$javaClass.SUCCESS_NO_INFO;
	}

}

