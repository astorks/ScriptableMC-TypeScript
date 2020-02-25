declare var Java: any;
import Buffer from '../../java/nio/Buffer.js'
import ByteOrder from '../../java/nio/ByteOrder.js'
import CharBuffer from '../../java/nio/CharBuffer.js'
import DoubleBuffer from '../../java/nio/DoubleBuffer.js'
import FloatBuffer from '../../java/nio/FloatBuffer.js'
import IntBuffer from '../../java/nio/IntBuffer.js'
import LongBuffer from '../../java/nio/LongBuffer.js'
import ShortBuffer from '../../java/nio/ShortBuffer.js'

export default interface ByteBuffer extends Buffer {
	alignedSlice(unitSize: number): ByteBuffer;
	alignmentOffset(index: number, unitSize: number): number;
	array(): any;
	array(): Array<number>;
	arrayOffset(): number;
	asCharBuffer(): CharBuffer;
	asDoubleBuffer(): DoubleBuffer;
	asFloatBuffer(): FloatBuffer;
	asIntBuffer(): IntBuffer;
	asLongBuffer(): LongBuffer;
	asReadOnlyBuffer(): ByteBuffer;
	asShortBuffer(): ShortBuffer;
	capacity(): number;
	clear(): Buffer;
	clear(): ByteBuffer;
	compact(): ByteBuffer;
	compareTo(that: ByteBuffer): number;
	compareTo(arg0: any): number;
	duplicate(): ByteBuffer;
	duplicate(): Buffer;
	flip(): ByteBuffer;
	flip(): Buffer;
	get(): number;
	get(dst: Array<number>): ByteBuffer;
	get(arg0: number): number;
	get(dst: Array<number>, offset: number, length: number): ByteBuffer;
	getChar(): string;
	getChar(arg0: number): string;
	getDouble(): number;
	getDouble(arg0: number): number;
	getFloat(): number;
	getFloat(arg0: number): number;
	getInt(): number;
	getInt(arg0: number): number;
	getLong(): number;
	getLong(arg0: number): number;
	getShort(): number;
	getShort(arg0: number): number;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isReadOnly(): boolean;
	limit(): number;
	limit(newLimit: number): ByteBuffer;
	limit(newLimit: number): Buffer;
	mark(): ByteBuffer;
	mark(): Buffer;
	mismatch(that: ByteBuffer): number;
	order(): ByteOrder;
	order(bo: ByteOrder): ByteBuffer;
	position(): number;
	position(newPosition: number): ByteBuffer;
	position(newPosition: number): Buffer;
	put(arg0: number): ByteBuffer;
	put(src: Array<number>): ByteBuffer;
	put(src: ByteBuffer): ByteBuffer;
	put(arg0: number, arg1: number): ByteBuffer;
	put(src: Array<number>, offset: number, length: number): ByteBuffer;
	putChar(arg0: string): ByteBuffer;
	putChar(arg0: number, arg1: string): ByteBuffer;
	putDouble(arg0: number): ByteBuffer;
	putDouble(arg0: number, arg1: number): ByteBuffer;
	putFloat(arg0: number): ByteBuffer;
	putFloat(arg0: number, arg1: number): ByteBuffer;
	putInt(arg0: number): ByteBuffer;
	putInt(arg0: number, arg1: number): ByteBuffer;
	putLong(arg0: number): ByteBuffer;
	putLong(arg0: number, arg1: number): ByteBuffer;
	putShort(arg0: number): ByteBuffer;
	putShort(arg0: number, arg1: number): ByteBuffer;
	remaining(): number;
	reset(): Buffer;
	reset(): ByteBuffer;
	rewind(): Buffer;
	rewind(): ByteBuffer;
	slice(): ByteBuffer;
	slice(): Buffer;
}

export default class ByteBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.ByteBuffer');
	}

	public static allocate(capacity: number): ByteBuffer;
	public static allocate(...args: any[]): any {
		return ByteBuffer.$javaClass.allocate(...args);
	}

	public static allocateDirect(capacity: number): ByteBuffer;
	public static allocateDirect(...args: any[]): any {
		return ByteBuffer.$javaClass.allocateDirect(...args);
	}

	public static wrap(array: Array<number>): ByteBuffer;
	public static wrap(array: Array<number>, offset: number, length: number): ByteBuffer;
	public static wrap(...args: any[]): any {
		return ByteBuffer.$javaClass.wrap(...args);
	}

}

