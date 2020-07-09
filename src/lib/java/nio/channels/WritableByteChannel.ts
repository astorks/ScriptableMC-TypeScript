declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import Channel from './Channel.js'

export default interface WritableByteChannel extends Channel {
	close(): void;
	isOpen(): boolean;
	write(arg0: ByteBuffer): number;
}

export default class WritableByteChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.WritableByteChannel');
	}

}

