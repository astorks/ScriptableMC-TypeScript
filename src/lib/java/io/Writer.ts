declare var Java: any;
import Closeable from '../../java/io/Closeable.js'
import Flushable from '../../java/io/Flushable.js'

export default interface Writer {
	append(c: string): Writer;
	append(c: string): any;
	append(csq: any): any;
	append(csq: any): Writer;
	append(csq: any, start: number, end: number): Writer;
	append(csq: any, start: number, end: number): any;
	close(): void;
	flush(): void;
	write(c: number): void;
	write(cbuf: Array<string>): void;
	write(str: string): void;
	write(arg0: Array<string>, arg1: number, arg2: number): void;
	write(str: string, off: number, len: number): void;
}

export default class Writer {
	public static get $javaClass(): any {
		return Java.type('java.io.Writer');
	}

	public static nullWriter(): Writer;
	public static nullWriter(...args: any[]): any {
		return Writer.$javaClass.nullWriter(...args);
	}

}

