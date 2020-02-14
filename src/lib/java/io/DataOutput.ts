declare var Java: any;

export default interface DataOutput {
	writeLong(arg0: number): void;
	writeFloat(arg0: number): void;
	writeByte(arg0: number): void;
	writeBoolean(arg0: boolean): void;
	writeShort(arg0: number): void;
	writeDouble(arg0: number): void;
	writeChars(arg0: string): void;
	write(arg0: Array<number>): void;
	write(arg0: number): void;
	write(arg0: Array<number>, arg1: number, arg2: number): void;
	writeInt(arg0: number): void;
	writeChar(arg0: number): void;
	writeBytes(arg0: string): void;
	writeUTF(arg0: string): void;
}

export default class DataOutput {
	public static get $javaClass(): any {
		return Java.type('java.io.DataOutput');
	}
}

