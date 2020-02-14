declare var Java: any;
import PrintStream from '../../../java/io/PrintStream.js'
import PrintWriter from '../../../java/io/PrintWriter.js'

export default interface InvalidPluginException {
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
}

export default class InvalidPluginException {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.InvalidPluginException');
	}
	constructor(message: string);
	constructor(message: string, cause: any);
	constructor();
	constructor(cause: any);
	constructor(...args: any[]) {
		return new InvalidPluginException.$javaClass(...args);
	}
}

