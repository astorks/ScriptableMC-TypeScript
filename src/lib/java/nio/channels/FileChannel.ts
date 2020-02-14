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
	transferFrom(arg0: ReadableByteChannel, arg1: number, arg2: number): number;
	force(arg0: boolean): void;
	tryLock(arg0: number, arg1: number, arg2: boolean): FileLock;
	tryLock(): FileLock;
	transferTo(arg0: number, arg1: number, arg2: WritableByteChannel): number;
	lock(): FileLock;
	lock(arg0: number, arg1: number, arg2: boolean): FileLock;
	size(): number;
	position(arg0: number): FileChannel;
	position(): number;
	position(arg0: number): SeekableByteChannel;
	write(arg0: ByteBuffer): number;
	write(arg0: ByteBuffer, arg1: number): number;
	write(arg0: Array<ByteBuffer>, arg1: number, arg2: number): number;
	write(arg0: Array<ByteBuffer>): number;
	read(arg0: ByteBuffer, arg1: number): number;
	read(arg0: ByteBuffer): number;
	read(arg0: Array<ByteBuffer>, arg1: number, arg2: number): number;
	read(arg0: Array<ByteBuffer>): number;
	truncate(arg0: number): FileChannel;
	truncate(arg0: number): SeekableByteChannel;
	map(arg0: FileChannel$MapMode, arg1: number, arg2: number): MappedByteBuffer;
	close(): void;
	isOpen(): boolean;
}

export default class FileChannel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.FileChannel');
	}
	public static open(arg0: Path, arg1: Array<OpenOption>): FileChannel;
	public static open(arg0: Path, arg1: any, arg2: Array<FileAttribute>): FileChannel;
	public static open(...args: any[]): any {
		return FileChannel.$javaClass.open(...args);
	}
}

