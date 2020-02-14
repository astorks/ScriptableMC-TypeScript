declare var Java: any;

export default interface DataInput {
	readLong(): number;
	readFloat(): number;
	readFully(arg0: Array<number>): void;
	readFully(arg0: Array<number>, arg1: number, arg2: number): void;
	readByte(): number;
	readUnsignedShort(): number;
	skipBytes(arg0: number): number;
	readBoolean(): boolean;
	readUnsignedByte(): number;
	readShort(): number;
	readDouble(): number;
	readLine(): string;
	readInt(): number;
	readChar(): string;
	readUTF(): string;
}

export default class DataInput {
	public static get $javaClass(): any {
		return Java.type('java.io.DataInput');
	}
}

