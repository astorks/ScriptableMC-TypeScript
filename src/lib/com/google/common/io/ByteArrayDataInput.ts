declare var Java: any;
import DataInput from '../../../../java/io/DataInput.js'

export default interface ByteArrayDataInput {
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

export default class ByteArrayDataInput {
	public static get $javaClass(): any {
		return Java.type('com.google.common.io.ByteArrayDataInput');
	}
}

