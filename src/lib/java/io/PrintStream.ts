declare var Java: any;
import Charset from '../../java/nio/charset/Charset.js'
import Closeable from '../../java/io/Closeable.js'
import File from '../../java/io/File.js'
import FilterOutputStream from '../../java/io/FilterOutputStream.js'
import OutputStream from '../../java/io/OutputStream.js'

export default interface PrintStream extends FilterOutputStream {
	append(csq: any): any;
	append(csq: any): PrintStream;
	append(c: string): any;
	append(c: string): PrintStream;
	append(csq: any, start: number, end: number): any;
	append(csq: any, start: number, end: number): PrintStream;
	checkError(): boolean;
	close(): void;
	flush(): void;
	format(format: string, args: Array<any>): PrintStream;
	format(l: any, format: string, args: Array<any>): PrintStream;
	print(b: boolean): void;
	print(i: number): void;
	print(d: number): void;
	print(f: number): void;
	print(obj: any): void;
	print(s: string): void;
	print(s: Array<string>): void;
	print(c: string): void;
	print(l: number): void;
	printf(format: string, args: Array<any>): PrintStream;
	printf(l: any, format: string, args: Array<any>): PrintStream;
	println(): void;
	println(x: number): void;
	println(x: number): void;
	println(x: number): void;
	println(x: any): void;
	println(x: Array<string>): void;
	println(x: string): void;
	println(x: boolean): void;
	println(x: string): void;
	println(x: number): void;
	write(b: number): void;
	write(b: Array<number>): void;
	write(buf: Array<number>, off: number, len: number): void;
}

export default class PrintStream {
	public static get $javaClass(): any {
		return Java.type('java.io.PrintStream');
	}

	constructor(fileName: string);
	constructor(file: File);
	constructor(out: OutputStream);
	constructor(fileName: string, csn: string);
	constructor(fileName: string, charset: Charset);
	constructor(file: File, csn: string);
	constructor(file: File, charset: Charset);
	constructor(out: OutputStream, autoFlush: boolean);
	constructor(out: OutputStream, autoFlush: boolean, charset: Charset);
	constructor(out: OutputStream, autoFlush: boolean, encoding: string);
	constructor(...args: any[]) {
		return new PrintStream.$javaClass(...args);
	}

	public static nullOutputStream(): OutputStream;
	public static nullOutputStream(...args: any[]): any {
		return PrintStream.$javaClass.nullOutputStream(...args);
	}

}

