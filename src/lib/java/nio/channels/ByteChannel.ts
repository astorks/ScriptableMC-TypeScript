declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import ReadableByteChannel from '../../../java/nio/channels/ReadableByteChannel.js'
import WritableByteChannel from '../../../java/nio/channels/WritableByteChannel.js'

export default interface ByteChannel {
	read(arg0: ByteBuffer): number;
	close(): void;
	isOpen(): boolean;
	write(arg0: ByteBuffer): number;
}

export default class ByteChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.ByteChannel');
	}
}

