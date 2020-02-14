declare var Java: any;
import InputStream from '../../java/io/InputStream.js'

export default interface ByteArrayInputStream extends InputStream {
	read(arg0: Array<number>, arg1: number, arg2: number): number;
	read(): number;
	close(): void;
	mark(arg0: number): void;
	skip(arg0: number): number;
	available(): number;
	markSupported(): boolean;
	reset(): void;
	read(arg0: Array<number>): number;
}

export default class ByteArrayInputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.ByteArrayInputStream');
	}
	constructor(arg0: Array<number>);
	constructor(arg0: Array<number>, arg1: number, arg2: number);
	constructor(...args: any[]) {
		return new ByteArrayInputStream.$javaClass(...args);
	}
}

