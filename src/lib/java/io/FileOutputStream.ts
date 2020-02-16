declare var Java: any;
import File from '../../java/io/File.js'
import FileChannel from '../../java/nio/channels/FileChannel.js'
import FileDescriptor from '../../java/io/FileDescriptor.js'
import OutputStream from '../../java/io/OutputStream.js'

export default interface FileOutputStream extends OutputStream {
	close(): void;
	flush(): void;
	getChannel(): FileChannel;
	getFD(): FileDescriptor;
	write(b: Array<number>): void;
	write(b: number): void;
	write(b: Array<number>, off: number, len: number): void;
}

export default class FileOutputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.FileOutputStream');
	}

	constructor(fdObj: FileDescriptor);
	constructor(file: File);
	constructor(_name: string);
	constructor(file: File, append: boolean);
	constructor(_name: string, append: boolean);
	constructor(...args: any[]) {
		return new FileOutputStream.$javaClass(...args);
	}

	public static nullOutputStream(): OutputStream;
	public static nullOutputStream(...args: any[]): any {
		return FileOutputStream.$javaClass.nullOutputStream(...args);
	}

}

