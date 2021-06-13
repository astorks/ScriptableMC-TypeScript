declare var Java: any;
import Buffer from './Buffer.js'
import ByteOrder from './ByteOrder.js'
import CharBuffer from './CharBuffer.js'
import DoubleBuffer from './DoubleBuffer.js'
import FloatBuffer from './FloatBuffer.js'
import IntBuffer from './IntBuffer.js'
import LongBuffer from './LongBuffer.js'
import ShortBuffer from './ShortBuffer.js'

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
	duplicate(): Buffer;
	duplicate(): ByteBuffer;
	flip(): Buffer;
	flip(): ByteBuffer;
	get(): number;
	get(dst: Array<number>): ByteBuffer;
	get(arg0: number): number;
	get(index: number, dst: Array<number>): ByteBuffer;
	get(dst: Array<number>, offset: number, length: number): ByteBuffer;
	get(index: number, dst: Array<number>, offset: number, length: number): ByteBuffer;
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
	mark(): Buffer;
	mark(): ByteBuffer;
	mismatch(that: ByteBuffer): number;
	order(): ByteOrder;
	order(bo: ByteOrder): ByteBuffer;
	position(): number;
	position(newPosition: number): Buffer;
	position(newPosition: number): ByteBuffer;
	put(src: ByteBuffer): ByteBuffer;
	put(src: Array<number>): ByteBuffer;
	put(arg0: number): ByteBuffer;
	put(arg0: number, arg1: number): ByteBuffer;
	put(index: number, src: Array<number>): ByteBuffer;
	put(src: Array<number>, offset: number, length: number): ByteBuffer;
	put(index: number, src: ByteBuffer, offset: number, length: number): ByteBuffer;
	put(index: number, src: Array<number>, offset: number, length: number): ByteBuffer;
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
	reset(): ByteBuffer;
	reset(): Buffer;
	rewind(): Buffer;
	rewind(): ByteBuffer;
	slice(): Buffer;
	slice(): ByteBuffer;
	slice(arg0: number, arg1: number): ByteBuffer;
	slice(arg0: number, arg1: number): Buffer;
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

