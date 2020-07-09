declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import ReadableByteChannel from './ReadableByteChannel.js'
import WritableByteChannel from './WritableByteChannel.js'

export default interface ByteChannel extends ReadableByteChannel, WritableByteChannel {
	close(): void;
	isOpen(): boolean;
	read(arg0: ByteBuffer): number;
	write(arg0: ByteBuffer): number;
}

export default class ByteChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.ByteChannel');
	}

}

