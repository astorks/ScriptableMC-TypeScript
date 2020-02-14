declare var Java: any;
import DataOutput from '../../java/io/DataOutput.js'

export default interface ObjectOutput {
	close(): void;
	flush(): void;
	write(arg0: Array<number>): void;
	write(arg0: number): void;
	write(arg0: Array<number>, arg1: number, arg2: number): void;
	writeBoolean(arg0: boolean): void;
	writeByte(arg0: number): void;
	writeBytes(arg0: string): void;
	writeChar(arg0: number): void;
	writeChars(arg0: string): void;
	writeDouble(arg0: number): void;
	writeFloat(arg0: number): void;
	writeInt(arg0: number): void;
	writeLong(arg0: number): void;
	writeObject(arg0: any): void;
	writeShort(arg0: number): void;
	writeUTF(arg0: string): void;
}

export default class ObjectOutput {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectOutput');
	}

}

