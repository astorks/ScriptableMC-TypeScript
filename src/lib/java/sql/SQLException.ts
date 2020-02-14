declare var Java: any;
import PrintStream from '../../java/io/PrintStream.js'
import PrintWriter from '../../java/io/PrintWriter.js'

export default interface SQLException {
	getSQLState(): string;
	getErrorCode(): number;
	getNextException(): SQLException;
	setNextException(arg0: SQLException): void;
	iterator(): any;
	printStackTrace(arg0: PrintStream): void;
	printStackTrace(): void;
	printStackTrace(arg0: PrintWriter): void;
	fillInStackTrace(): any;
	getCause(): any;
	initCause(arg0: any): any;
	getMessage(): string;
	getLocalizedMessage(): string;
	getStackTrace(): Array<any>;
	setStackTrace(arg0: Array<any>): void;
	addSuppressed(arg0: any): void;
	getSuppressed(): Array<any>;
	spliterator(): any;
	forEach(arg0: any): void;
}

export default class SQLException {
	public static get $javaClass(): any {
		return Java.type('java.sql.SQLException');
	}
	constructor(arg0: string, arg1: string, arg2: number, arg3: any);
	constructor(arg0: string, arg1: string, arg2: any);
	constructor(arg0: string, arg1: string, arg2: number);
	constructor(arg0: string, arg1: string);
	constructor(arg0: string);
	constructor(arg0: string, arg1: any);
	constructor(arg0: any);
	constructor();
	constructor(...args: any[]) {
		return new SQLException.$javaClass(...args);
	}
}

