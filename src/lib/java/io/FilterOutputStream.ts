declare var Java: any;
import OutputStream from '../../java/io/OutputStream.js'

export default interface FilterOutputStream extends OutputStream {
	close(): void;
	flush(): void;
	write(b: Array<number>): void;
	write(b: number): void;
	write(b: Array<number>, off: number, len: number): void;
}

export default class FilterOutputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.FilterOutputStream');
	}

	constructor(out: OutputStream);
	constructor(...args: any[]) {
		return new FilterOutputStream.$javaClass(...args);
	}

	public static nullOutputStream(): OutputStream;
	public static nullOutputStream(...args: any[]): any {
		return FilterOutputStream.$javaClass.nullOutputStream(...args);
	}

}

