declare var Java: any;
import Channel from '../../../../java/nio/channels/Channel.js'
import InterruptibleChannel from '../../../../java/nio/channels/InterruptibleChannel.js'

export default interface AbstractInterruptibleChannel {
	close(): void;
	isOpen(): boolean;
}

export default class AbstractInterruptibleChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.spi.AbstractInterruptibleChannel');
	}

}

