declare var Java: any;
import Buffer from '../../java/nio/Buffer.js'
import ByteOrder from '../../java/nio/ByteOrder.js'

export default interface DoubleBuffer extends Buffer {
	get(arg0: Array<number>, arg1: number, arg2: number): DoubleBuffer;
	get(arg0: Array<number>): DoubleBuffer;
	get(): number;
	get(arg0: number): number;
	put(arg0: Array<number>): DoubleBuffer;
	put(arg0: Array<number>, arg1: number, arg2: number): DoubleBuffer;
	put(arg0: number, arg1: number): DoubleBuffer;
	put(arg0: DoubleBuffer): DoubleBuffer;
	put(arg0: number): DoubleBuffer;
	compareTo(arg0: any): number;
	compareTo(arg0: DoubleBuffer): number;
	isDirect(): boolean;
	hasArray(): boolean;
	array(): Array<number>;
	array(): any;
	arrayOffset(): number;
	duplicate(): DoubleBuffer;
	slice(): DoubleBuffer;
	asReadOnlyBuffer(): DoubleBuffer;
	compact(): DoubleBuffer;
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

export default class DoubleBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.DoubleBuffer');
	}
	public static wrap(arg0: Array<number>, arg1: number, arg2: number): DoubleBuffer;
	public static wrap(arg0: Array<number>): DoubleBuffer;
	public static wrap(...args: any[]): any {
		return DoubleBuffer.$javaClass.wrap(...args);
	}
	public static allocate(arg0: number): DoubleBuffer;
	public static allocate(...args: any[]): any {
		return DoubleBuffer.$javaClass.allocate(...args);
	}
}

