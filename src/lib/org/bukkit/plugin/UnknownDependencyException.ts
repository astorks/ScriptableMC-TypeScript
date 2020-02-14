declare var Java: any;
import PrintStream from '../../../java/io/PrintStream.js'
import PrintWriter from '../../../java/io/PrintWriter.js'

export default interface UnknownDependencyException {
	addSuppressed(exception: any): void;
	fillInStackTrace(): any;
	getCause(): any;
	getLocalizedMessage(): string;
	getMessage(): string;
	getStackTrace(): Array<any>;
	getSuppressed(): Array<any>;
	initCause(cause: any): any;
	printStackTrace(): void;
	printStackTrace(s: PrintStream): void;
	printStackTrace(s: PrintWriter): void;
	setStackTrace(stackTrace: Array<any>): void;
}

export default class UnknownDependencyException {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.UnknownDependencyException');
	}

	constructor();
	constructor(message: string);
	constructor(throwable: any);
	constructor(throwable: any, message: string);
	constructor(...args: any[]) {
		return new UnknownDependencyException.$javaClass(...args);
	}

}

