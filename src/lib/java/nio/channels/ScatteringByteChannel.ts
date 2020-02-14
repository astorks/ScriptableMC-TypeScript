declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import ReadableByteChannel from '../../../java/nio/channels/ReadableByteChannel.js'

export default interface ScatteringByteChannel {
	read(arg0: Array<ByteBuffer>, arg1: number, arg2: number): number;
	read(arg0: Array<ByteBuffer>): number;
	read(arg0: ByteBuffer): number;
	close(): void;
	isOpen(): boolean;
}

export default class ScatteringByteChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.ScatteringByteChannel');
	}
}

