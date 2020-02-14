declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import ByteChannel from '../../../java/nio/channels/ByteChannel.js'

export default interface SeekableByteChannel {
	size(): number;
	position(arg0: number): SeekableByteChannel;
	position(): number;
	write(arg0: ByteBuffer): number;
	read(arg0: ByteBuffer): number;
	truncate(arg0: number): SeekableByteChannel;
	close(): void;
	isOpen(): boolean;
}

export default class SeekableByteChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.SeekableByteChannel');
	}
}

