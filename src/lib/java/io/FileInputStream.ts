declare var Java: any;
import File from '../../java/io/File.js'
import FileChannel from '../../java/nio/channels/FileChannel.js'
import FileDescriptor from '../../java/io/FileDescriptor.js'
import InputStream from '../../java/io/InputStream.js'
import OutputStream from '../../java/io/OutputStream.js'

export default interface FileInputStream extends InputStream {
	available(): number;
	close(): void;
	getChannel(): FileChannel;
	getFD(): FileDescriptor;
	mark(readlimit: number): void;
	markSupported(): boolean;
	read(): number;
	read(b: Array<number>): number;
	read(b: Array<number>, off: number, len: number): number;
	readAllBytes(): Array<number>;
	readNBytes(len: number): Array<number>;
	readNBytes(b: Array<number>, off: number, len: number): number;
	reset(): void;
	skip(n: number): number;
	transferTo(out: OutputStream): number;
}

export default class FileInputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.FileInputStream');
	}

	constructor(fdObj: FileDescriptor);
	constructor(file: File);
	constructor(_name: string);
	constructor(...args: any[]) {
		return new FileInputStream.$javaClass(...args);
	}

	public static nullInputStream(): InputStream;
	public static nullInputStream(...args: any[]): any {
		return FileInputStream.$javaClass.nullInputStream(...args);
	}

}

