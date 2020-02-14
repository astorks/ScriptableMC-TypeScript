declare var Java: any;
import Buffer from '../../java/nio/Buffer.js'
import ByteOrder from '../../java/nio/ByteOrder.js'

export default interface DoubleBuffer extends Buffer {
	array(): Array<number>;
	array(): any;
	arrayOffset(): number;
	asReadOnlyBuffer(): DoubleBuffer;
	capacity(): number;
	clear(): DoubleBuffer;
	clear(): Buffer;
	compact(): DoubleBuffer;
	compareTo(arg0: any): number;
	compareTo(that: DoubleBuffer): number;
	duplicate(): Buffer;
	duplicate(): DoubleBuffer;
	flip(): Buffer;
	flip(): DoubleBuffer;
	get(): number;
	get(arg0: number): number;
	get(dst: Array<number>): DoubleBuffer;
	get(dst: Array<number>, offset: number, length: number): DoubleBuffer;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isReadOnly(): boolean;
	limit(): number;
	limit(newLimit: number): DoubleBuffer;
	limit(newLimit: number): Buffer;
	mark(): DoubleBuffer;
	mark(): Buffer;
	mismatch(that: DoubleBuffer): number;
	order(): ByteOrder;
	position(): number;
	position(newPosition: number): Buffer;
	position(newPosition: number): DoubleBuffer;
	put(arg0: number): DoubleBuffer;
	put(src: DoubleBuffer): DoubleBuffer;
	put(src: Array<number>): DoubleBuffer;
	put(arg0: number, arg1: number): DoubleBuffer;
	put(src: Array<number>, offset: number, length: number): DoubleBuffer;
	remaining(): number;
	reset(): Buffer;
	reset(): DoubleBuffer;
	rewind(): Buffer;
	rewind(): DoubleBuffer;
	slice(): DoubleBuffer;
	slice(): Buffer;
}

export default class DoubleBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.DoubleBuffer');
	}

	public static allocate(capacity: number): DoubleBuffer;
	public static allocate(...args: any[]): any {
		return DoubleBuffer.$javaClass.allocate(...args);
	}

	public static wrap(array: Array<number>): DoubleBuffer;
	public static wrap(array: Array<number>, offset: number, length: number): DoubleBuffer;
	public static wrap(...args: any[]): any {
		return DoubleBuffer.$javaClass.wrap(...args);
	}

}

