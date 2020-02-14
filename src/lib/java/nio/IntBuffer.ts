declare var Java: any;
import Buffer from '../../java/nio/Buffer.js'
import ByteOrder from '../../java/nio/ByteOrder.js'

export default interface IntBuffer extends Buffer {
	get(arg0: Array<number>, arg1: number, arg2: number): IntBuffer;
	get(arg0: Array<number>): IntBuffer;
	get(): number;
	get(arg0: number): number;
	put(arg0: Array<number>): IntBuffer;
	put(arg0: Array<number>, arg1: number, arg2: number): IntBuffer;
	put(arg0: number, arg1: number): IntBuffer;
	put(arg0: IntBuffer): IntBuffer;
	put(arg0: number): IntBuffer;
	compareTo(arg0: any): number;
	compareTo(arg0: IntBuffer): number;
	isDirect(): boolean;
	hasArray(): boolean;
	array(): Array<number>;
	array(): any;
	arrayOffset(): number;
	duplicate(): IntBuffer;
	slice(): IntBuffer;
	asReadOnlyBuffer(): IntBuffer;
	compact(): IntBuffer;
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

export default class IntBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.IntBuffer');
	}
	public static wrap(arg0: Array<number>, arg1: number, arg2: number): IntBuffer;
	public static wrap(arg0: Array<number>): IntBuffer;
	public static wrap(...args: any[]): any {
		return IntBuffer.$javaClass.wrap(...args);
	}
	public static allocate(arg0: number): IntBuffer;
	public static allocate(...args: any[]): any {
		return IntBuffer.$javaClass.allocate(...args);
	}
}

