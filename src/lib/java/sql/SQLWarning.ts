declare var Java: any;
import PrintStream from '../../java/io/PrintStream.js'
import PrintWriter from '../../java/io/PrintWriter.js'
import SQLException from '../../java/sql/SQLException.js'

export default interface SQLWarning extends SQLException {
	addSuppressed(exception: any): void;
	fillInStackTrace(): any;
	forEach(action: any): void;
	getCause(): any;
	getErrorCode(): number;
	getLocalizedMessage(): string;
	getMessage(): string;
	getNextException(): SQLException;
	getNextWarning(): SQLWarning;
	getSQLState(): string;
	getStackTrace(): Array<any>;
	getSuppressed(): Array<any>;
	initCause(cause: any): any;
	iterator(): any;
	printStackTrace(): void;
	printStackTrace(s: PrintStream): void;
	printStackTrace(s: PrintWriter): void;
	setNextException(ex: SQLException): void;
	setNextWarning(w: SQLWarning): void;
	setStackTrace(stackTrace: Array<any>): void;
	spliterator(): any;
}

export default class SQLWarning {
	public static get $javaClass(): any {
		return Java.type('java.sql.SQLWarning');
	}

	constructor();
	constructor(reason: string);
	constructor(cause: any);
	constructor(reason: string, cause: any);
	constructor(reason: string, SQLState: string);
	constructor(reason: string, SQLState: string, cause: any);
	constructor(reason: string, SQLState: string, vendorCode: number);
	constructor(reason: string, SQLState: string, vendorCode: number, cause: any);
	constructor(...args: any[]) {
		return new SQLWarning.$javaClass(...args);
	}

}

