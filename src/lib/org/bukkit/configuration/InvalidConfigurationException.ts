declare var Java: any;
import PrintStream from '../../../java/io/PrintStream.js'
import PrintWriter from '../../../java/io/PrintWriter.js'

export default interface InvalidConfigurationException {
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

export default class InvalidConfigurationException {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.InvalidConfigurationException');
	}

	constructor();
	constructor(cause: any);
	constructor(msg: string);
	constructor(msg: string, cause: any);
	constructor(...args: any[]) {
		return new InvalidConfigurationException.$javaClass(...args);
	}

}

