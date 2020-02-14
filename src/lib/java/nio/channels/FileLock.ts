declare var Java: any;
import Channel from '../../../java/nio/channels/Channel.js'
import FileChannel from '../../../java/nio/channels/FileChannel.js'

export default interface FileLock {
	isValid(): boolean;
	acquiredBy(): Channel;
	isShared(): boolean;
	overlaps(arg0: number, arg1: number): boolean;
	release(): void;
	size(): number;
	position(): number;
	close(): void;
	channel(): FileChannel;
}

export default class FileLock {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.FileLock');
	}
}

