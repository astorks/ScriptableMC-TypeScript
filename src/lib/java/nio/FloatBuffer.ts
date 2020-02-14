declare var Java: any;
import Buffer from '../../java/nio/Buffer.js'
import ByteOrder from '../../java/nio/ByteOrder.js'

export default interface FloatBuffer extends Buffer {
	get(arg0: Array<number>, arg1: number, arg2: number): FloatBuffer;
	get(arg0: Array<number>): FloatBuffer;
	get(): number;
	get(arg0: number): number;
	put(arg0: Array<number>): FloatBuffer;
	put(arg0: Array<number>, arg1: number, arg2: number): FloatBuffer;
	put(arg0: number, arg1: number): FloatBuffer;
	put(arg0: FloatBuffer): FloatBuffer;
	put(arg0: number): FloatBuffer;
	compareTo(arg0: any): number;
	compareTo(arg0: FloatBuffer): number;
	isDirect(): boolean;
	hasArray(): boolean;
	array(): Array<number>;
	array(): any;
	arrayOffset(): number;
	duplicate(): FloatBuffer;
	slice(): FloatBuffer;
	asReadOnlyBuffer(): FloatBuffer;
	compact(): FloatBuffer;
	order(): ByteOrder;
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

export default class FloatBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.FloatBuffer');
	}
	public static wrap(arg0: Array<number>, arg1: number, arg2: number): FloatBuffer;
	public static wrap(arg0: Array<number>): FloatBuffer;
	public static wrap(...args: any[]): any {
		return FloatBuffer.$javaClass.wrap(...args);
	}
	public static allocate(arg0: number): FloatBuffer;
	public static allocate(...args: any[]): any {
		return FloatBuffer.$javaClass.allocate(...args);
	}
}

