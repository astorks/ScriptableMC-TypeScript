declare var Java: any;

export default interface CompletionHandler {
	completed(arg0: any, arg1: any): void;
	failed(arg0: any, arg1: any): void;
}

export default class CompletionHandler {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.CompletionHandler');
	}

}

