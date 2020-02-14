declare var Java: any;
import PrintStream from '../../../java/io/PrintStream.js'
import PrintWriter from '../../../java/io/PrintWriter.js'

export default interface IllegalPluginAccessException {
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

export default class IllegalPluginAccessException {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.IllegalPluginAccessException');
	}

	constructor();
	constructor(msg: string);
	constructor(...args: any[]) {
		return new IllegalPluginAccessException.$javaClass(...args);
	}

}

