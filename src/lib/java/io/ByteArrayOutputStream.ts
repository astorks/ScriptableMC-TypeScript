declare var Java: any;
import OutputStream from '../../java/io/OutputStream.js'

export default interface ByteArrayOutputStream extends OutputStream {
	writeTo(arg0: OutputStream): void;
	size(): number;
	write(arg0: Array<number>, arg1: number, arg2: number): void;
	write(arg0: number): void;
	close(): void;
	reset(): void;
	toByteArray(): Array<number>;
	write(arg0: Array<number>): void;
	flush(): void;
}

export default class ByteArrayOutputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.ByteArrayOutputStream');
	}
	constructor();
	constructor(arg0: number);
	constructor(...args: any[]) {
		return new ByteArrayOutputStream.$javaClass(...args);
	}
}

