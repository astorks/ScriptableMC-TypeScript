declare var Java: any;
import Buffer from '../../java/nio/Buffer.js'
import ByteOrder from '../../java/nio/ByteOrder.js'

export default interface LongBuffer extends Buffer {
	array(): Array<number>;
	array(): any;
	arrayOffset(): number;
	asReadOnlyBuffer(): LongBuffer;
	capacity(): number;
	clear(): LongBuffer;
	clear(): Buffer;
	compact(): LongBuffer;
	compareTo(arg0: any): number;
	compareTo(that: LongBuffer): number;
	duplicate(): Buffer;
	duplicate(): LongBuffer;
	flip(): Buffer;
	flip(): LongBuffer;
	get(): number;
	get(arg0: number): number;
	get(dst: Array<number>): LongBuffer;
	get(dst: Array<number>, offset: number, length: number): LongBuffer;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isReadOnly(): boolean;
	limit(): number;
	limit(newLimit: number): LongBuffer;
	limit(newLimit: number): Buffer;
	mark(): LongBuffer;
	mark(): Buffer;
	mismatch(that: LongBuffer): number;
	order(): ByteOrder;
	position(): number;
	position(newPosition: number): Buffer;
	position(newPosition: number): LongBuffer;
	put(arg0: number): LongBuffer;
	put(src: LongBuffer): LongBuffer;
	put(src: Array<number>): LongBuffer;
	put(arg0: number, arg1: number): LongBuffer;
	put(src: Array<number>, offset: number, length: number): LongBuffer;
	remaining(): number;
	reset(): Buffer;
	reset(): LongBuffer;
	rewind(): Buffer;
	rewind(): LongBuffer;
	slice(): LongBuffer;
	slice(): Buffer;
}

export default class LongBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.LongBuffer');
	}

	public static allocate(capacity: number): LongBuffer;
	public static allocate(...args: any[]): any {
		return LongBuffer.$javaClass.allocate(...args);
	}

	public static wrap(array: Array<number>): LongBuffer;
	public static wrap(array: Array<number>, offset: number, length: number): LongBuffer;
	public static wrap(...args: any[]): any {
		return LongBuffer.$javaClass.wrap(...args);
	}

}

