declare var Java: any;
import Buffer from '../../java/nio/Buffer.js'
import ByteOrder from '../../java/nio/ByteOrder.js'

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
	duplicate(): Buffer;
	duplicate(): IntBuffer;
	flip(): Buffer;
	flip(): IntBuffer;
	get(): number;
	get(arg0: number): number;
	get(dst: Array<number>): IntBuffer;
	get(dst: Array<number>, offset: number, length: number): IntBuffer;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isReadOnly(): boolean;
	limit(): number;
	limit(newLimit: number): IntBuffer;
	limit(newLimit: number): Buffer;
	mark(): IntBuffer;
	mark(): Buffer;
	mismatch(that: IntBuffer): number;
	order(): ByteOrder;
	position(): number;
	position(newPosition: number): Buffer;
	position(newPosition: number): IntBuffer;
	put(arg0: number): IntBuffer;
	put(src: IntBuffer): IntBuffer;
	put(src: Array<number>): IntBuffer;
	put(arg0: number, arg1: number): IntBuffer;
	put(src: Array<number>, offset: number, length: number): IntBuffer;
	remaining(): number;
	reset(): Buffer;
	reset(): IntBuffer;
	rewind(): Buffer;
	rewind(): IntBuffer;
	slice(): IntBuffer;
	slice(): Buffer;
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

