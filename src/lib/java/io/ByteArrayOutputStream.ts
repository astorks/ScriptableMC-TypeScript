declare var Java: any;
import Charset from '../../java/nio/charset/Charset.js'
import OutputStream from '../../java/io/OutputStream.js'

export default interface ByteArrayOutputStream extends OutputStream {
	close(): void;
	flush(): void;
	reset(): void;
	size(): number;
	toByteArray(): Array<number>;
	write(b: number): void;
	write(b: Array<number>): void;
	write(b: Array<number>, off: number, len: number): void;
	writeBytes(b: Array<number>): void;
	writeTo(out: OutputStream): void;
}

export default class ByteArrayOutputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.ByteArrayOutputStream');
	}

	constructor();
	constructor(size: number);
	constructor(...args: any[]) {
		return new ByteArrayOutputStream.$javaClass(...args);
	}

	public static nullOutputStream(): OutputStream;
	public static nullOutputStream(...args: any[]): any {
		return ByteArrayOutputStream.$javaClass.nullOutputStream(...args);
	}

}

