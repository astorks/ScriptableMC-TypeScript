declare var Java: any;

export interface ByteArrayDataInput {
	readFully(arg0: Array<number>): void;
	readFully(arg0: Array<number>, arg1: number, arg2: number): void;
	readFloat(): number;
	readLong(): number;
	readUnsignedShort(): number;
	readByte(): number;
	readUnsignedByte(): number;
	readShort(): number;
	readDouble(): number;
	readBoolean(): boolean;
	skipBytes(arg0: number): number;
	readLine(): string;
	readInt(): number;
	readChar(): string;
	readUTF(): string;
}

export class ByteArrayDataInput {
	public static get $javaClass(): any {
		return Java.type('com.google.common.io.ByteArrayDataInput');
	}
}

