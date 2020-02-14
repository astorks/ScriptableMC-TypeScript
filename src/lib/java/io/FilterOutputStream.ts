declare var Java: any;
import OutputStream from '../../java/io/OutputStream.js'

export default interface FilterOutputStream extends OutputStream {
	write(arg0: Array<number>, arg1: number, arg2: number): void;
	write(arg0: Array<number>): void;
	write(arg0: number): void;
	flush(): void;
	close(): void;
}

export default class FilterOutputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.FilterOutputStream');
	}
	constructor(arg0: OutputStream);
	constructor(...args: any[]) {
		return new FilterOutputStream.$javaClass(...args);
	}
}

