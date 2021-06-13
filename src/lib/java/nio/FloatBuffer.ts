declare var Java: any;
import Buffer from './Buffer.js'
import ByteOrder from './ByteOrder.js'

export default interface FloatBuffer extends Buffer {
	array(): Array<number>;
	array(): any;
	arrayOffset(): number;
	asReadOnlyBuffer(): FloatBuffer;
	capacity(): number;
	clear(): FloatBuffer;
	clear(): Buffer;
	compact(): FloatBuffer;
	compareTo(arg0: any): number;
	compareTo(that: FloatBuffer): number;
	duplicate(): FloatBuffer;
	duplicate(): Buffer;
	flip(): FloatBuffer;
	flip(): Buffer;
	get(): number;
	get(arg0: number): number;
	get(dst: Array<number>): FloatBuffer;
	get(index: number, dst: Array<number>): FloatBuffer;
	get(dst: Array<number>, offset: number, length: number): FloatBuffer;
	get(index: number, dst: Array<number>, offset: number, length: number): FloatBuffer;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isReadOnly(): boolean;
	limit(): number;
	limit(newLimit: number): FloatBuffer;
	limit(newLimit: number): Buffer;
	mark(): Buffer;
	mark(): FloatBuffer;
	mismatch(that: FloatBuffer): number;
	order(): ByteOrder;
	position(): number;
	position(newPosition: number): Buffer;
	position(newPosition: number): FloatBuffer;
	put(src: FloatBuffer): FloatBuffer;
	put(src: Array<number>): FloatBuffer;
	put(arg0: number): FloatBuffer;
	put(index: number, src: Array<number>): FloatBuffer;
	put(arg0: number, arg1: number): FloatBuffer;
	put(src: Array<number>, offset: number, length: number): FloatBuffer;
	put(index: number, src: FloatBuffer, offset: number, length: number): FloatBuffer;
	put(index: number, src: Array<number>, offset: number, length: number): FloatBuffer;
	remaining(): number;
	reset(): Buffer;
	reset(): FloatBuffer;
	rewind(): FloatBuffer;
	rewind(): Buffer;
	slice(): FloatBuffer;
	slice(): Buffer;
	slice(arg0: number, arg1: number): FloatBuffer;
	slice(arg0: number, arg1: number): Buffer;
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

