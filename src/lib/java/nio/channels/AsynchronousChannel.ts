declare var Java: any;
import Channel from './Channel.js'

export default interface AsynchronousChannel extends Channel {
	close(): void;
	isOpen(): boolean;
}

export default class AsynchronousChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.AsynchronousChannel');
	}

}

