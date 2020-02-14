declare var Java: any;
import Buffer from '../../java/nio/Buffer.js'
import ByteOrder from '../../java/nio/ByteOrder.js'

export default interface CharBuffer extends Buffer {
	get(arg0: number): string;
	get(): string;
	get(arg0: Array<string>, arg1: number, arg2: number): CharBuffer;
	get(arg0: Array<string>): CharBuffer;
	put(arg0: string): CharBuffer;
	put(arg0: number, arg1: string): CharBuffer;
	put(arg0: CharBuffer): CharBuffer;
	put(arg0: Array<string>): CharBuffer;
	put(arg0: string, arg1: number, arg2: number): CharBuffer;
	put(arg0: string): CharBuffer;
	put(arg0: Array<string>, arg1: number, arg2: number): CharBuffer;
	append(arg0: string): any;
	append(arg0: string): CharBuffer;
	append(arg0: any): CharBuffer;
	append(arg0: any, arg1: number, arg2: number): any;
	append(arg0: any): any;
	append(arg0: any, arg1: number, arg2: number): CharBuffer;
	compareTo(arg0: CharBuffer): number;
	compareTo(arg0: any): number;
	length(): number;
	charAt(arg0: number): string;
	subSequence(arg0: number, arg1: number): any;
	subSequence(arg0: number, arg1: number): CharBuffer;
	chars(): any;
	isDirect(): boolean;
	hasArray(): boolean;
	array(): Array<string>;
	array(): any;
	arrayOffset(): number;
	read(arg0: CharBuffer): number;
	duplicate(): CharBuffer;
	slice(): CharBuffer;
	asReadOnlyBuffer(): CharBuffer;
	compact(): CharBuffer;
	order(): ByteOrder;
	limit(arg0: number): Buffer;
	limit(): number;
	clear(): Buffer;
	remaining(): number;
	position(arg0: number): Buffer;
	position(): number;
	capacity(): number;
	mark(): Buffer;
	reset(): Buffer;
	flip(): Buffer;
	rewind(): Buffer;
	hasRemaining(): boolean;
	isReadOnly(): boolean;
	codePoints(): any;
}

export default class CharBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.CharBuffer');
	}
	public static wrap(arg0: any): CharBuffer;
	public static wrap(arg0: Array<string>, arg1: number, arg2: number): CharBuffer;
	public static wrap(arg0: Array<string>): CharBuffer;
	public static wrap(arg0: any, arg1: number, arg2: number): CharBuffer;
	public static wrap(...args: any[]): any {
		return CharBuffer.$javaClass.wrap(...args);
	}
	public static allocate(arg0: number): CharBuffer;
	public static allocate(...args: any[]): any {
		return CharBuffer.$javaClass.allocate(...args);
	}
}

