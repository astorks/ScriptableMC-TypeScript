declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import Channel from '../../../java/nio/channels/Channel.js'

export default interface WritableByteChannel {
	write(arg0: ByteBuffer): number;
	close(): void;
	isOpen(): boolean;
}

export default class WritableByteChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.WritableByteChannel');
	}
}

