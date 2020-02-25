declare var Java: any;
import Buffer from '../../java/nio/Buffer.js'
import ByteOrder from '../../java/nio/ByteOrder.js'

export default interface CharBuffer extends Buffer {
	append(c: string): CharBuffer;
	append(c: string): any;
	append(csq: any): CharBuffer;
	append(csq: any): any;
	append(csq: any, start: number, end: number): CharBuffer;
	append(csq: any, start: number, end: number): any;
	array(): Array<string>;
	array(): any;
	arrayOffset(): number;
	asReadOnlyBuffer(): CharBuffer;
	capacity(): number;
	charAt(index: number): string;
	chars(): any;
	clear(): CharBuffer;
	clear(): Buffer;
	codePoints(): any;
	compact(): CharBuffer;
	compareTo(that: CharBuffer): number;
	compareTo(arg0: any): number;
	duplicate(): CharBuffer;
	duplicate(): Buffer;
	flip(): Buffer;
	flip(): CharBuffer;
	get(): string;
	get(dst: Array<string>): CharBuffer;
	get(arg0: number): string;
	get(dst: Array<string>, offset: number, length: number): CharBuffer;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
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
	put(src: CharBuffer): CharBuffer;
	put(src: Array<string>): CharBuffer;
	put(arg0: string): CharBuffer;
	put(arg0: number, arg1: string): CharBuffer;
	put(src: Array<string>, offset: number, length: number): CharBuffer;
	put(src: string, start: number, end: number): CharBuffer;
	read(target: CharBuffer): number;
	remaining(): number;
	reset(): Buffer;
	reset(): CharBuffer;
	rewind(): Buffer;
	rewind(): CharBuffer;
	slice(): CharBuffer;
	slice(): Buffer;
	subSequence(arg0: number, arg1: number): CharBuffer;
	subSequence(arg0: number, arg1: number): any;
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
	public static wrap(array: Array<string>, offset: number, length: number): CharBuffer;
	public static wrap(csq: any, start: number, end: number): CharBuffer;
	public static wrap(...args: any[]): any {
		return CharBuffer.$javaClass.wrap(...args);
	}

}

