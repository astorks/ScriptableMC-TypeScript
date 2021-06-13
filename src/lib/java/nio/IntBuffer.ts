declare var Java: any;
import Buffer from './Buffer.js'
import ByteOrder from './ByteOrder.js'

export default interface IntBuffer extends Buffer {
	array(): Array<number>;
	array(): any;
	arrayOffset(): number;
	asReadOnlyBuffer(): IntBuffer;
	capacity(): number;
	clear(): IntBuffer;
	clear(): Buffer;
	compact(): IntBuffer;
	compareTo(arg0: any): number;
	compareTo(that: IntBuffer): number;
	duplicate(): IntBuffer;
	duplicate(): Buffer;
	flip(): IntBuffer;
	flip(): Buffer;
	get(): number;
	get(arg0: number): number;
	get(dst: Array<number>): IntBuffer;
	get(index: number, dst: Array<number>): IntBuffer;
	get(dst: Array<number>, offset: number, length: number): IntBuffer;
	get(index: number, dst: Array<number>, offset: number, length: number): IntBuffer;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isReadOnly(): boolean;
	limit(): number;
	limit(newLimit: number): IntBuffer;
	limit(newLimit: number): Buffer;
	mark(): Buffer;
	mark(): IntBuffer;
	mismatch(that: IntBuffer): number;
	order(): ByteOrder;
	position(): number;
	position(newPosition: number): Buffer;
	position(newPosition: number): IntBuffer;
	put(src: IntBuffer): IntBuffer;
	put(src: Array<number>): IntBuffer;
	put(arg0: number): IntBuffer;
	put(index: number, src: Array<number>): IntBuffer;
	put(arg0: number, arg1: number): IntBuffer;
	put(src: Array<number>, offset: number, length: number): IntBuffer;
	put(index: number, src: IntBuffer, offset: number, length: number): IntBuffer;
	put(index: number, src: Array<number>, offset: number, length: number): IntBuffer;
	remaining(): number;
	reset(): Buffer;
	reset(): IntBuffer;
	rewind(): IntBuffer;
	rewind(): Buffer;
	slice(): IntBuffer;
	slice(): Buffer;
	slice(arg0: number, arg1: number): IntBuffer;
	slice(arg0: number, arg1: number): Buffer;
}

export default class IntBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.IntBuffer');
	}

	public static allocate(capacity: number): IntBuffer;
	public static allocate(...args: any[]): any {
		return IntBuffer.$javaClass.allocate(...args);
	}

	public static wrap(array: Array<number>): IntBuffer;
	public static wrap(array: Array<number>, offset: number, length: number): IntBuffer;
	public static wrap(...args: any[]): any {
		return IntBuffer.$javaClass.wrap(...args);
	}

}

