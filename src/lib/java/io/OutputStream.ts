declare var Java: any;
import Closeable from '../../java/io/Closeable.js'
import Flushable from '../../java/io/Flushable.js'

export default interface OutputStream {
	write(arg0: Array<number>, arg1: number, arg2: number): void;
	write(arg0: Array<number>): void;
	write(arg0: number): void;
	flush(): void;
	close(): void;
}

export default class OutputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.OutputStream');
	}
	constructor();
	constructor(...args: any[]) {
		return new OutputStream.$javaClass(...args);
	}
}

