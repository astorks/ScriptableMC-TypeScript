declare var Java: any;
import Buffer from '../../java/nio/Buffer.js'
import ByteBuffer from '../../java/nio/ByteBuffer.js'
import ByteOrder from '../../java/nio/ByteOrder.js'
import CharBuffer from '../../java/nio/CharBuffer.js'
import DoubleBuffer from '../../java/nio/DoubleBuffer.js'
import FloatBuffer from '../../java/nio/FloatBuffer.js'
import IntBuffer from '../../java/nio/IntBuffer.js'
import LongBuffer from '../../java/nio/LongBuffer.js'
import ShortBuffer from '../../java/nio/ShortBuffer.js'

export default interface MappedByteBuffer extends ByteBuffer {
	isLoaded(): boolean;
	force(): MappedByteBuffer;
	load(): MappedByteBuffer;
	get(arg0: number): number;
	get(arg0: Array<number>, arg1: number, arg2: number): ByteBuffer;
	get(): number;
	get(arg0: Array<number>): ByteBuffer;
	put(arg0: Array<number>, arg1: number, arg2: number): ByteBuffer;
	put(arg0: number): ByteBuffer;
	put(arg0: ByteBuffer): ByteBuffer;
	put(arg0: number, arg1: number): ByteBuffer;
	put(arg0: Array<number>): ByteBuffer;
	compareTo(arg0: any): number;
	compareTo(arg0: ByteBuffer): number;
	getShort(): number;
	getShort(arg0: number): number;
	putShort(arg0: number, arg1: number): ByteBuffer;
	putShort(arg0: number): ByteBuffer;
	getChar(arg0: number): string;
	getChar(): string;
	putChar(arg0: number, arg1: string): ByteBuffer;
	putChar(arg0: string): ByteBuffer;
	getInt(): number;
	getInt(arg0: number): number;
	putInt(arg0: number): ByteBuffer;
	putInt(arg0: number, arg1: number): ByteBuffer;
	getLong(arg0: number): number;
	getLong(): number;
	putLong(arg0: number, arg1: number): ByteBuffer;
	putLong(arg0: number): ByteBuffer;
	getFloat(): number;
	getFloat(arg0: number): number;
	putFloat(arg0: number): ByteBuffer;
	putFloat(arg0: number, arg1: number): ByteBuffer;
	getDouble(arg0: number): number;
	getDouble(): number;
	putDouble(arg0: number, arg1: number): ByteBuffer;
	putDouble(arg0: number): ByteBuffer;
	isDirect(): boolean;
	hasArray(): boolean;
	array(): any;
	array(): Array<number>;
	arrayOffset(): number;
	duplicate(): ByteBuffer;
	slice(): ByteBuffer;
	asReadOnlyBuffer(): ByteBuffer;
	compact(): ByteBuffer;
	order(arg0: ByteOrder): ByteBuffer;
	order(): ByteOrder;
	asCharBuffer(): CharBuffer;
	asShortBuffer(): ShortBuffer;
	asIntBuffer(): IntBuffer;
	asLongBuffer(): LongBuffer;
	asFloatBuffer(): FloatBuffer;
	asDoubleBuffer(): DoubleBuffer;
	limit(arg0: number): Buffer;
	limit(): number;
	clear(): Buffer;
	remaining(): number;
	position(arg0: number): Buffer;
	position(): number;
	capacity(): number;
	mark(): Buffer;
	reset(): Buffer;
	flip(): Buffer;
	rewind(): Buffer;
	hasRemaining(): boolean;
	isReadOnly(): boolean;
}

export default class MappedByteBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.MappedByteBuffer');
	}
	public static wrap(arg0: Array<number>): ByteBuffer;
	public static wrap(arg0: Array<number>, arg1: number, arg2: number): ByteBuffer;
	public static wrap(...args: any[]): any {
		return MappedByteBuffer.$javaClass.wrap(...args);
	}
	public static allocate(arg0: number): ByteBuffer;
	public static allocate(...args: any[]): any {
		return MappedByteBuffer.$javaClass.allocate(...args);
	}
	public static allocateDirect(arg0: number): ByteBuffer;
	public static allocateDirect(...args: any[]): any {
		return MappedByteBuffer.$javaClass.allocateDirect(...args);
	}
}

