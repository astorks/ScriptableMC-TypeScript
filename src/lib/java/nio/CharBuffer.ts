declare var Java: any;
import Buffer from './Buffer.js'
import ByteOrder from './ByteOrder.js'

export default interface CharBuffer extends Buffer {
	append(c: string): any;
	append(c: string): CharBuffer;
	append(csq: any): any;
	append(csq: any): CharBuffer;
	append(csq: any, start: number, end: number): any;
	append(csq: any, start: number, end: number): CharBuffer;
	array(): any;
	array(): Array<string>;
	arrayOffset(): number;
	asReadOnlyBuffer(): CharBuffer;
	capacity(): number;
	charAt(index: number): string;
	chars(): any;
	clear(): Buffer;
	clear(): CharBuffer;
	codePoints(): any;
	compact(): CharBuffer;
	compareTo(arg0: any): number;
	compareTo(that: CharBuffer): number;
	duplicate(): CharBuffer;
	duplicate(): Buffer;
	flip(): Buffer;
	flip(): CharBuffer;
	get(): string;
	get(arg0: number): string;
	get(dst: Array<string>): CharBuffer;
	get(index: number, dst: Array<string>): CharBuffer;
	get(dst: Array<string>, offset: number, length: number): CharBuffer;
	get(index: number, dst: Array<string>, offset: number, length: number): CharBuffer;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isEmpty(): boolean;
	isReadOnly(): boolean;
	length(): number;
	limit(): number;
	limit(newLimit: number): Buffer;
	limit(newLimit: number): CharBuffer;
	mark(): Buffer;
	mark(): CharBuffer;
	mismatch(that: CharBuffer): number;
	order(): ByteOrder;
	position(): number;
	position(newPosition: number): CharBuffer;
	position(newPosition: number): Buffer;
	put(src: string): CharBuffer;
	put(src: Array<string>): CharBuffer;
	put(src: CharBuffer): CharBuffer;
	put(arg0: string): CharBuffer;
	put(arg0: number, arg1: string): CharBuffer;
	put(index: number, src: Array<string>): CharBuffer;
	put(src: string, start: number, end: number): CharBuffer;
	put(src: Array<string>, offset: number, length: number): CharBuffer;
	put(index: number, src: Array<string>, offset: number, length: number): CharBuffer;
	put(index: number, src: CharBuffer, offset: number, length: number): CharBuffer;
	read(target: CharBuffer): number;
	remaining(): number;
	reset(): Buffer;
	reset(): CharBuffer;
	rewind(): CharBuffer;
	rewind(): Buffer;
	slice(): Buffer;
	slice(): CharBuffer;
	slice(arg0: number, arg1: number): Buffer;
	slice(arg0: number, arg1: number): CharBuffer;
	subSequence(arg0: number, arg1: number): any;
	subSequence(arg0: number, arg1: number): CharBuffer;
}

export default class CharBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.CharBuffer');
	}

	public static allocate(capacity: number): CharBuffer;
	public static allocate(...args: any[]): any {
		return CharBuffer.$javaClass.allocate(...args);
	}

	public static wrap(csq: any): CharBuffer;
	public static wrap(array: Array<string>): CharBuffer;
	public static wrap(csq: any, start: number, end: number): CharBuffer;
	public static wrap(array: Array<string>, offset: number, length: number): CharBuffer;
	public static wrap(...args: any[]): any {
		return CharBuffer.$javaClass.wrap(...args);
	}

}

