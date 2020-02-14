declare var Java: any;
import Buffer from '../../java/nio/Buffer.js'
import ByteOrder from '../../java/nio/ByteOrder.js'

export default interface ShortBuffer extends Buffer {
	array(): Array<number>;
	array(): any;
	arrayOffset(): number;
	asReadOnlyBuffer(): ShortBuffer;
	capacity(): number;
	clear(): ShortBuffer;
	clear(): Buffer;
	compact(): ShortBuffer;
	compareTo(arg0: any): number;
	compareTo(that: ShortBuffer): number;
	duplicate(): Buffer;
	duplicate(): ShortBuffer;
	flip(): Buffer;
	flip(): ShortBuffer;
	get(): number;
	get(arg0: number): number;
	get(dst: Array<number>): ShortBuffer;
	get(dst: Array<number>, offset: number, length: number): ShortBuffer;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isReadOnly(): boolean;
	limit(): number;
	limit(newLimit: number): ShortBuffer;
	limit(newLimit: number): Buffer;
	mark(): ShortBuffer;
	mark(): Buffer;
	mismatch(that: ShortBuffer): number;
	order(): ByteOrder;
	position(): number;
	position(newPosition: number): Buffer;
	position(newPosition: number): ShortBuffer;
	put(arg0: number): ShortBuffer;
	put(src: ShortBuffer): ShortBuffer;
	put(src: Array<number>): ShortBuffer;
	put(arg0: number, arg1: number): ShortBuffer;
	put(src: Array<number>, offset: number, length: number): ShortBuffer;
	remaining(): number;
	reset(): Buffer;
	reset(): ShortBuffer;
	rewind(): Buffer;
	rewind(): ShortBuffer;
	slice(): ShortBuffer;
	slice(): Buffer;
}

export default class ShortBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.ShortBuffer');
	}

	public static allocate(capacity: number): ShortBuffer;
	public static allocate(...args: any[]): any {
		return ShortBuffer.$javaClass.allocate(...args);
	}

	public static wrap(array: Array<number>): ShortBuffer;
	public static wrap(array: Array<number>, offset: number, length: number): ShortBuffer;
	public static wrap(...args: any[]): any {
		return ShortBuffer.$javaClass.wrap(...args);
	}

}

