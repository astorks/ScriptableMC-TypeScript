declare var Java: any;

export default interface Buffer {
	limit(arg0: number): Buffer;
	limit(): number;
	clear(): Buffer;
	remaining(): number;
	isDirect(): boolean;
	hasArray(): boolean;
	array(): any;
	position(arg0: number): Buffer;
	position(): number;
	arrayOffset(): number;
	capacity(): number;
	mark(): Buffer;
	reset(): Buffer;
	flip(): Buffer;
	rewind(): Buffer;
	hasRemaining(): boolean;
	isReadOnly(): boolean;
}

export default class Buffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.Buffer');
	}
}

