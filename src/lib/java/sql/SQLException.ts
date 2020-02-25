declare var Java: any;
import PrintStream from '../../java/io/PrintStream.js'
import PrintWriter from '../../java/io/PrintWriter.js'

export default interface SQLException {
	addSuppressed(exception: any): void;
	fillInStackTrace(): any;
	forEach(action: any): void;
	getCause(): any;
	getErrorCode(): number;
	getLocalizedMessage(): string;
	getMessage(): string;
	getNextException(): SQLException;
	getSQLState(): string;
	getStackTrace(): Array<any>;
	getSuppressed(): Array<any>;
	initCause(cause: any): any;
	iterator(): any;
	printStackTrace(): void;
	printStackTrace(s: PrintStream): void;
	printStackTrace(s: PrintWriter): void;
	setNextException(ex: SQLException): void;
	setStackTrace(stackTrace: Array<any>): void;
	spliterator(): any;
}

export default class SQLException {
	public static get $javaClass(): any {
		return Java.type('java.sql.SQLException');
	}

	constructor();
	constructor(reason: string);
	constructor(cause: any);
	constructor(reason: string, SQLState: string);
	constructor(reason: string, cause: any);
	constructor(reason: string, sqlState: string, cause: any);
	constructor(reason: string, SQLState: string, vendorCode: number);
	constructor(reason: string, sqlState: string, vendorCode: number, cause: any);
	constructor(...args: any[]) {
		return new SQLException.$javaClass(...args);
	}

}

