declare var Java: any;
import Closeable from '../../java/io/Closeable.js'
import File from '../../java/io/File.js'
import FilterOutputStream from '../../java/io/FilterOutputStream.js'
import OutputStream from '../../java/io/OutputStream.js'

export default interface PrintStream extends FilterOutputStream {
	println(arg0: number): void;
	println(arg0: number): void;
	println(arg0: number): void;
	println(arg0: any): void;
	println(arg0: string): void;
	println(arg0: Array<string>): void;
	println(): void;
	println(arg0: boolean): void;
	println(arg0: string): void;
	println(arg0: number): void;
	append(arg0: any): any;
	append(arg0: string): any;
	append(arg0: string): PrintStream;
	append(arg0: any, arg1: number, arg2: number): any;
	append(arg0: any, arg1: number, arg2: number): PrintStream;
	append(arg0: any): PrintStream;
	format(arg0: any, arg1: string, arg2: Array<any>): PrintStream;
	format(arg0: string, arg1: Array<any>): PrintStream;
	write(arg0: number): void;
	write(arg0: Array<number>, arg1: number, arg2: number): void;
	print(arg0: boolean): void;
	print(arg0: number): void;
	print(arg0: number): void;
	print(arg0: number): void;
	print(arg0: any): void;
	print(arg0: string): void;
	print(arg0: Array<string>): void;
	print(arg0: string): void;
	print(arg0: number): void;
	flush(): void;
	close(): void;
	checkError(): boolean;
	printf(arg0: string, arg1: Array<any>): PrintStream;
	printf(arg0: any, arg1: string, arg2: Array<any>): PrintStream;
	write(arg0: Array<number>): void;
}

export default class PrintStream {
	public static get $javaClass(): any {
		return Java.type('java.io.PrintStream');
	}
	constructor(arg0: OutputStream);
	constructor(arg0: OutputStream, arg1: boolean);
	constructor(arg0: OutputStream, arg1: boolean, arg2: string);
	constructor(arg0: string);
	constructor(arg0: string, arg1: string);
	constructor(arg0: File, arg1: string);
	constructor(arg0: File);
	constructor(...args: any[]) {
		return new PrintStream.$javaClass(...args);
	}
}

