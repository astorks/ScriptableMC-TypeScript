declare var Java: any;
import Closeable from '../../java/io/Closeable.js'
import Flushable from '../../java/io/Flushable.js'

export default interface OutputStream {
	close(): void;
	flush(): void;
	write(b: Array<number>): void;
	write(arg0: number): void;
	write(b: Array<number>, off: number, len: number): void;
}

export default class OutputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.OutputStream');
	}

	constructor();
	constructor(...args: any[]) {
		return new OutputStream.$javaClass(...args);
	}

	public static nullOutputStream(): OutputStream;
	public static nullOutputStream(...args: any[]): any {
		return OutputStream.$javaClass.nullOutputStream(...args);
	}

}

