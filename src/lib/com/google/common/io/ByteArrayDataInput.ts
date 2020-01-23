declare var Java: any;

export interface ByteArrayDataInput {
	readLine(): string;
	readInt(): number;
	readUTF(): string;
	readFloat(): number;
	readChar(): string;
	skipBytes(arg0: number): number;
	readBoolean(): boolean;
	readByte(): number;
	readUnsignedByte(): number;
	readShort(): number;
	readUnsignedShort(): number;
	readLong(): number;
	readDouble(): number;
	readFully(arg0: Array<number>, arg1: number, arg2: number): void;
	readFully(arg0: Array<number>): void;
}

export class ByteArrayDataInput {
	public static get $javaClass(): any {
		return Java.type('com.google.common.io.ByteArrayDataInput');
	}
}
