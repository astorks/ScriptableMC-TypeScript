declare var Java: any;
import Channel from '../../../java/nio/channels/Channel.js'

export default interface AsynchronousChannel {
	close(): void;
	isOpen(): boolean;
}

export default class AsynchronousChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.AsynchronousChannel');
	}

}

