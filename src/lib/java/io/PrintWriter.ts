declare var Java: any;
import Charset from '../../java/nio/charset/Charset.js'
import File from '../../java/io/File.js'
import OutputStream from '../../java/io/OutputStream.js'
import Writer from '../../java/io/Writer.js'

export default interface PrintWriter extends Writer {
	append(csq: any): PrintWriter;
	append(csq: any): any;
	append(csq: any): Writer;
	append(c: string): any;
	append(c: string): Writer;
	append(c: string): PrintWriter;
	append(csq: any, start: number, end: number): PrintWriter;
	append(csq: any, start: number, end: number): Writer;
	append(csq: any, start: number, end: number): any;
	checkError(): boolean;
	close(): void;
	flush(): void;
	format(format: string, args: Array<any>): PrintWriter;
	format(l: any, format: string, args: Array<any>): PrintWriter;
	print(f: number): void;
	print(l: number): void;
	print(i: number): void;
	print(c: string): void;
	print(b: boolean): void;
	print(obj: any): void;
	print(s: string): void;
	print(s: Array<string>): void;
	print(d: number): void;
	printf(format: string, args: Array<any>): PrintWriter;
	printf(l: any, format: string, args: Array<any>): PrintWriter;
	println(): void;
	println(x: Array<string>): void;
	println(x: number): void;
	println(x: number): void;
	println(x: string): void;
	println(x: any): void;
	println(x: number): void;
	println(x: string): void;
	println(x: boolean): void;
	println(x: number): void;
	write(c: number): void;
	write(buf: Array<string>): void;
	write(s: string): void;
	write(s: string, off: number, len: number): void;
	write(buf: Array<string>, off: number, len: number): void;
}

export default class PrintWriter {
	public static get $javaClass(): any {
		return Java.type('java.io.PrintWriter');
	}

	constructor(fileName: string);
	constructor(file: File);
	constructor(out: Writer);
	constructor(out: OutputStream);
	constructor(fileName: string, csn: string);
	constructor(fileName: string, charset: Charset);
	constructor(file: File, csn: string);
	constructor(file: File, charset: Charset);
	constructor(out: Writer, autoFlush: boolean);
	constructor(out: OutputStream, autoFlush: boolean);
	constructor(out: OutputStream, autoFlush: boolean, charset: Charset);
	constructor(...args: any[]) {
		return new PrintWriter.$javaClass(...args);
	}

	public static nullWriter(): Writer;
	public static nullWriter(...args: any[]): any {
		return PrintWriter.$javaClass.nullWriter(...args);
	}

}

