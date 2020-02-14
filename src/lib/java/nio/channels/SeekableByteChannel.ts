declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import ByteChannel from '../../../java/nio/channels/ByteChannel.js'

export default interface SeekableByteChannel {
	close(): void;
	isOpen(): boolean;
	position(): number;
	position(arg0: number): SeekableByteChannel;
	read(arg0: ByteBuffer): number;
	size(): number;
	truncate(arg0: number): SeekableByteChannel;
	write(arg0: ByteBuffer): number;
}

export default class SeekableByteChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.SeekableByteChannel');
	}

}

