declare var Java: any;
import PrintStream from '../../../java/io/PrintStream.js'
import PrintWriter from '../../../java/io/PrintWriter.js'

export default interface AuthorNagException {
	getMessage(): string;
	printStackTrace(arg0: PrintStream): void;
	printStackTrace(): void;
	printStackTrace(arg0: PrintWriter): void;
	fillInStackTrace(): any;
	getCause(): any;
	initCause(arg0: any): any;
	getLocalizedMessage(): string;
	getStackTrace(): Array<any>;
	setStackTrace(arg0: Array<any>): void;
	addSuppressed(arg0: any): void;
	getSuppressed(): Array<any>;
}

export default class AuthorNagException {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.AuthorNagException');
	}
	constructor(message: string);
	constructor(...args: any[]) {
		return new AuthorNagException.$javaClass(...args);
	}
}

