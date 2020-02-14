declare var Java: any;
import Buffer from '../../java/nio/Buffer.js'
import ByteOrder from '../../java/nio/ByteOrder.js'

export default interface LongBuffer extends Buffer {
	get(arg0: Array<number>, arg1: number, arg2: number): LongBuffer;
	get(arg0: Array<number>): LongBuffer;
	get(): number;
	get(arg0: number): number;
	put(arg0: Array<number>): LongBuffer;
	put(arg0: Array<number>, arg1: number, arg2: number): LongBuffer;
	put(arg0: number, arg1: number): LongBuffer;
	put(arg0: LongBuffer): LongBuffer;
	put(arg0: number): LongBuffer;
	compareTo(arg0: any): number;
	compareTo(arg0: LongBuffer): number;
	isDirect(): boolean;
	hasArray(): boolean;
	array(): Array<number>;
	array(): any;
	arrayOffset(): number;
	duplicate(): LongBuffer;
	slice(): LongBuffer;
	asReadOnlyBuffer(): LongBuffer;
	compact(): LongBuffer;
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

export default class LongBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.LongBuffer');
	}
	public static wrap(arg0: Array<number>, arg1: number, arg2: number): LongBuffer;
	public static wrap(arg0: Array<number>): LongBuffer;
	public static wrap(...args: any[]): any {
		return LongBuffer.$javaClass.wrap(...args);
	}
	public static allocate(arg0: number): LongBuffer;
	public static allocate(...args: any[]): any {
		return LongBuffer.$javaClass.allocate(...args);
	}
}

