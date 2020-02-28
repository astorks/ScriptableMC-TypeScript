declare var Java: any;
import Channel from './Channel.js'
import FileChannel from './FileChannel.js'

export default interface FileLock {
	acquiredBy(): Channel;
	channel(): FileChannel;
	close(): void;
	isShared(): boolean;
	isValid(): boolean;
	overlaps(position: number, size: number): boolean;
	position(): number;
	release(): void;
	size(): number;
}

export default class FileLock {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.FileLock');
	}

}

