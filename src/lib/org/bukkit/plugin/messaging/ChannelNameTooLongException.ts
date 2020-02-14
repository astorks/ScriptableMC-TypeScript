declare var Java: any;
import PrintStream from '../../../../java/io/PrintStream.js'
import PrintWriter from '../../../../java/io/PrintWriter.js'

export default interface ChannelNameTooLongException {
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

export default class ChannelNameTooLongException {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.ChannelNameTooLongException');
	}

	constructor();
	constructor(channel: string);
	constructor(...args: any[]) {
		return new ChannelNameTooLongException.$javaClass(...args);
	}

}

