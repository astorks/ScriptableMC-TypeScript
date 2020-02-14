declare var Java: any;

export default interface Buffer {
	array(): any;
	arrayOffset(): number;
	capacity(): number;
	clear(): Buffer;
	duplicate(): Buffer;
	flip(): Buffer;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isReadOnly(): boolean;
	limit(): number;
	limit(newLimit: number): Buffer;
	mark(): Buffer;
	position(): number;
	position(newPosition: number): Buffer;
	remaining(): number;
	reset(): Buffer;
	rewind(): Buffer;
	slice(): Buffer;
}

export default class Buffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.Buffer');
	}

}

