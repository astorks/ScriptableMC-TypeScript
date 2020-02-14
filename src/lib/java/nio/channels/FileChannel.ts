declare var Java: any;
import AbstractInterruptibleChannel from '../../../java/nio/channels/spi/AbstractInterruptibleChannel.js'
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import FileAttribute from '../../../java/nio/file/attribute/FileAttribute.js'
import FileChannel$MapMode from '../../../java/nio/channels/FileChannel$MapMode.js'
import FileLock from '../../../java/nio/channels/FileLock.js'
import GatheringByteChannel from '../../../java/nio/channels/GatheringByteChannel.js'
import MappedByteBuffer from '../../../java/nio/MappedByteBuffer.js'
import OpenOption from '../../../java/nio/file/OpenOption.js'
import Path from '../../../java/nio/file/Path.js'
import ReadableByteChannel from '../../../java/nio/channels/ReadableByteChannel.js'
import ScatteringByteChannel from '../../../java/nio/channels/ScatteringByteChannel.js'
import SeekableByteChannel from '../../../java/nio/channels/SeekableByteChannel.js'
import WritableByteChannel from '../../../java/nio/channels/WritableByteChannel.js'

export default interface FileChannel extends AbstractInterruptibleChannel {
	close(): void;
	force(arg0: boolean): void;
	isOpen(): boolean;
	lock(): FileLock;
	lock(arg0: number, arg1: number, arg2: boolean): FileLock;
	map(arg0: FileChannel$MapMode, arg1: number, arg2: number): MappedByteBuffer;
	position(): number;
	position(arg0: number): FileChannel;
	position(arg0: number): SeekableByteChannel;
	read(arg0: ByteBuffer): number;
	read(dsts: Array<ByteBuffer>): number;
	read(arg0: ByteBuffer, arg1: number): number;
	read(arg0: Array<ByteBuffer>, arg1: number, arg2: number): number;
	size(): number;
	transferFrom(arg0: ReadableByteChannel, arg1: number, arg2: number): number;
	transferTo(arg0: number, arg1: number, arg2: WritableByteChannel): number;
	truncate(arg0: number): FileChannel;
	truncate(arg0: number): SeekableByteChannel;
	tryLock(): FileLock;
	tryLock(arg0: number, arg1: number, arg2: boolean): FileLock;
	write(arg0: ByteBuffer): number;
	write(srcs: Array<ByteBuffer>): number;
	write(arg0: ByteBuffer, arg1: number): number;
	write(arg0: Array<ByteBuffer>, arg1: number, arg2: number): number;
}

export default class FileChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.FileChannel');
	}

	public static open(path: Path, options: Array<OpenOption>): FileChannel;
	public static open(path: Path, options: any, attrs: Array<FileAttribute>): FileChannel;
	public static open(...args: any[]): any {
		return FileChannel.$javaClass.open(...args);
	}

}

