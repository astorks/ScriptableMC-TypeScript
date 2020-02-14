declare var Java: any;
import Buffer from '../../java/nio/Buffer.js'
import ByteOrder from '../../java/nio/ByteOrder.js'

export default interface ShortBuffer extends Buffer {
	get(arg0: Array<number>, arg1: number, arg2: number): ShortBuffer;
	get(arg0: Array<number>): ShortBuffer;
	get(): number;
	get(arg0: number): number;
	put(arg0: Array<number>): ShortBuffer;
	put(arg0: Array<number>, arg1: number, arg2: number): ShortBuffer;
	put(arg0: number, arg1: number): ShortBuffer;
	put(arg0: ShortBuffer): ShortBuffer;
	put(arg0: number): ShortBuffer;
	compareTo(arg0: any): number;
	compareTo(arg0: ShortBuffer): number;
	isDirect(): boolean;
	hasArray(): boolean;
	array(): Array<number>;
	array(): any;
	arrayOffset(): number;
	duplicate(): ShortBuffer;
	slice(): ShortBuffer;
	asReadOnlyBuffer(): ShortBuffer;
	compact(): ShortBuffer;
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

export default class ShortBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.ShortBuffer');
	}
	public static wrap(arg0: Array<number>, arg1: number, arg2: number): ShortBuffer;
	public static wrap(arg0: Array<number>): ShortBuffer;
	public static wrap(...args: any[]): any {
		return ShortBuffer.$javaClass.wrap(...args);
	}
	public static allocate(arg0: number): ShortBuffer;
	public static allocate(...args: any[]): any {
		return ShortBuffer.$javaClass.allocate(...args);
	}
}

