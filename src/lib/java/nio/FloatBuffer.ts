declare var Java: any;
import Buffer from '../../java/nio/Buffer.js'
import ByteOrder from '../../java/nio/ByteOrder.js'

export default interface FloatBuffer extends Buffer {
	array(): any;
	array(): Array<number>;
	arrayOffset(): number;
	asReadOnlyBuffer(): FloatBuffer;
	capacity(): number;
	clear(): FloatBuffer;
	clear(): Buffer;
	compact(): FloatBuffer;
	compareTo(arg0: any): number;
	compareTo(that: FloatBuffer): number;
	duplicate(): Buffer;
	duplicate(): FloatBuffer;
	flip(): FloatBuffer;
	flip(): Buffer;
	get(): number;
	get(dst: Array<number>): FloatBuffer;
	get(arg0: number): number;
	get(dst: Array<number>, offset: number, length: number): FloatBuffer;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isReadOnly(): boolean;
	limit(): number;
	limit(newLimit: number): Buffer;
	limit(newLimit: number): FloatBuffer;
	mark(): Buffer;
	mark(): FloatBuffer;
	mismatch(that: FloatBuffer): number;
	order(): ByteOrder;
	position(): number;
	position(newPosition: number): FloatBuffer;
	position(newPosition: number): Buffer;
	put(src: Array<number>): FloatBuffer;
	put(src: FloatBuffer): FloatBuffer;
	put(arg0: number): FloatBuffer;
	put(arg0: number, arg1: number): FloatBuffer;
	put(src: Array<number>, offset: number, length: number): FloatBuffer;
	remaining(): number;
	reset(): Buffer;
	reset(): FloatBuffer;
	rewind(): Buffer;
	rewind(): FloatBuffer;
	slice(): FloatBuffer;
	slice(): Buffer;
}

export default class FloatBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.FloatBuffer');
	}

	public static allocate(capacity: number): FloatBuffer;
	public static allocate(...args: any[]): any {
		return FloatBuffer.$javaClass.allocate(...args);
	}

	public static wrap(array: Array<number>): FloatBuffer;
	public static wrap(array: Array<number>, offset: number, length: number): FloatBuffer;
	public static wrap(...args: any[]): any {
		return FloatBuffer.$javaClass.wrap(...args);
	}

}

