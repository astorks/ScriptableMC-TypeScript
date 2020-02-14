declare var Java: any;
import AsynchronousChannel from '../../../java/nio/channels/AsynchronousChannel.js'
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import CompletionHandler from '../../../java/nio/channels/CompletionHandler.js'
import FileAttribute from '../../../java/nio/file/attribute/FileAttribute.js'
import FileLock from '../../../java/nio/channels/FileLock.js'
import OpenOption from '../../../java/nio/file/OpenOption.js'
import Path from '../../../java/nio/file/Path.js'

export default interface AsynchronousFileChannel {
	force(arg0: boolean): void;
	tryLock(arg0: number, arg1: number, arg2: boolean): FileLock;
	tryLock(): FileLock;
	lock(): any;
	lock(arg0: any, arg1: CompletionHandler): void;
	lock(arg0: number, arg1: number, arg2: boolean): any;
	lock(arg0: number, arg1: number, arg2: boolean, arg3: any, arg4: CompletionHandler): void;
	size(): number;
	write(arg0: ByteBuffer, arg1: number, arg2: any, arg3: CompletionHandler): void;
	write(arg0: ByteBuffer, arg1: number): any;
	read(arg0: ByteBuffer, arg1: number, arg2: any, arg3: CompletionHandler): void;
	read(arg0: ByteBuffer, arg1: number): any;
	truncate(arg0: number): AsynchronousFileChannel;
	close(): void;
	isOpen(): boolean;
}

export default class AsynchronousFileChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.AsynchronousFileChannel');
	}
	public static open(arg0: Path, arg1: Array<OpenOption>): AsynchronousFileChannel;
	public static open(arg0: Path, arg1: any, arg2: any, arg3: Array<FileAttribute>): AsynchronousFileChannel;
	public static open(...args: any[]): any {
		return AsynchronousFileChannel.$javaClass.open(...args);
	}
}

