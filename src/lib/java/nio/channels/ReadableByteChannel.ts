declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import Channel from './Channel.js'

export default interface ReadableByteChannel extends Channel {
	close(): void;
	isOpen(): boolean;
	read(arg0: ByteBuffer): number;
}

export default class ReadableByteChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.ReadableByteChannel');
	}

}

