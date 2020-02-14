declare var Java: any;
import Closeable from '../../java/io/Closeable.js'
import Flushable from '../../java/io/Flushable.js'

export default interface Writer {
	append(arg0: any, arg1: number, arg2: number): Writer;
	append(arg0: string): Writer;
	append(arg0: any): Writer;
	append(arg0: string): any;
	append(arg0: any, arg1: number, arg2: number): any;
	append(arg0: any): any;
	write(arg0: Array<string>): void;
	write(arg0: Array<string>, arg1: number, arg2: number): void;
	write(arg0: number): void;
	write(arg0: string, arg1: number, arg2: number): void;
	write(arg0: string): void;
	flush(): void;
	close(): void;
}

export default class Writer {
	public static get $javaClass(): any {
		return Java.type('java.io.Writer');
	}
}

