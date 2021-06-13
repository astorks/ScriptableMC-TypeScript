declare var Java: any;
import Buffer from './Buffer.js'
import ByteOrder from './ByteOrder.js'

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
	duplicate(): DoubleBuffer;
	duplicate(): Buffer;
	flip(): DoubleBuffer;
	flip(): Buffer;
	get(): number;
	get(arg0: number): number;
	get(dst: Array<number>): DoubleBuffer;
	get(index: number, dst: Array<number>): DoubleBuffer;
	get(dst: Array<number>, offset: number, length: number): DoubleBuffer;
	get(index: number, dst: Array<number>, offset: number, length: number): DoubleBuffer;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isReadOnly(): boolean;
	limit(): number;
	limit(newLimit: number): DoubleBuffer;
	limit(newLimit: number): Buffer;
	mark(): Buffer;
	mark(): DoubleBuffer;
	mismatch(that: DoubleBuffer): number;
	order(): ByteOrder;
	position(): number;
	position(newPosition: number): Buffer;
	position(newPosition: number): DoubleBuffer;
	put(src: DoubleBuffer): DoubleBuffer;
	put(src: Array<number>): DoubleBuffer;
	put(arg0: number): DoubleBuffer;
	put(index: number, src: Array<number>): DoubleBuffer;
	put(arg0: number, arg1: number): DoubleBuffer;
	put(src: Array<number>, offset: number, length: number): DoubleBuffer;
	put(index: number, src: DoubleBuffer, offset: number, length: number): DoubleBuffer;
	put(index: number, src: Array<number>, offset: number, length: number): DoubleBuffer;
	remaining(): number;
	reset(): Buffer;
	reset(): DoubleBuffer;
	rewind(): DoubleBuffer;
	rewind(): Buffer;
	slice(): DoubleBuffer;
	slice(): Buffer;
	slice(arg0: number, arg1: number): DoubleBuffer;
	slice(arg0: number, arg1: number): Buffer;
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

