declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import WritableByteChannel from '../../../java/nio/channels/WritableByteChannel.js'

export default interface GatheringByteChannel {
	write(arg0: Array<ByteBuffer>, arg1: number, arg2: number): number;
	write(arg0: Array<ByteBuffer>): number;
	write(arg0: ByteBuffer): number;
	close(): void;
	isOpen(): boolean;
}

export default class GatheringByteChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.GatheringByteChannel');
	}
}

