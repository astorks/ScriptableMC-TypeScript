declare var Java: any;
import Closeable from './Closeable.js'
import OutputStream from './OutputStream.js'

export default interface InputStream extends Closeable {
	available(): number;
	close(): void;
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
	skipNBytes(n: number): void;
	transferTo(out: OutputStream): number;
}

export default class InputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.InputStream');
	}

	constructor();
	constructor(...args: any[]) {
		return new InputStream.$javaClass(...args);
	}

	public static nullInputStream(): InputStream;
	public static nullInputStream(...args: any[]): any {
		return InputStream.$javaClass.nullInputStream(...args);
	}

}

