declare var Java: any;
import InputStream from '../../java/io/InputStream.js'
import OutputStream from '../../java/io/OutputStream.js'

export default interface ByteArrayInputStream extends InputStream {
	available(): number;
	close(): void;
	mark(readAheadLimit: number): void;
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

export default class ByteArrayInputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.ByteArrayInputStream');
	}

	constructor(buf: Array<number>);
	constructor(buf: Array<number>, offset: number, length: number);
	constructor(...args: any[]) {
		return new ByteArrayInputStream.$javaClass(...args);
	}

	public static nullInputStream(): InputStream;
	public static nullInputStream(...args: any[]): any {
		return ByteArrayInputStream.$javaClass.nullInputStream(...args);
	}

}

