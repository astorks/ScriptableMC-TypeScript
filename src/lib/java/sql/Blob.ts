declare var Java: any;
import InputStream from '../../java/io/InputStream.js'
import OutputStream from '../../java/io/OutputStream.js'

export default interface Blob {
	setBytes(arg0: number, arg1: Array<number>): number;
	setBytes(arg0: number, arg1: Array<number>, arg2: number, arg3: number): number;
	setBinaryStream(arg0: number): OutputStream;
	free(): void;
	getBinaryStream(arg0: number, arg1: number): InputStream;
	getBinaryStream(): InputStream;
	length(): number;
	getBytes(arg0: number, arg1: number): Array<number>;
	position(arg0: Blob, arg1: number): number;
	position(arg0: Array<number>, arg1: number): number;
	truncate(arg0: number): void;
}

export default class Blob {
	public static get $javaClass(): any {
		return Java.type('java.sql.Blob');
	}
}

