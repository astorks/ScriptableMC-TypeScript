declare var Java: any;
import Channel from '../../../java/nio/channels/Channel.js'

export default interface InterruptibleChannel {
	close(): void;
	isOpen(): boolean;
}

export default class InterruptibleChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.InterruptibleChannel');
	}

}

