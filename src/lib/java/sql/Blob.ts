declare var Java: any;
import InputStream from '../../java/io/InputStream.js'
import OutputStream from '../../java/io/OutputStream.js'

export default interface Blob {
	free(): void;
	getBinaryStream(): InputStream;
	getBinaryStream(arg0: number, arg1: number): InputStream;
	getBytes(arg0: number, arg1: number): Array<number>;
	length(): number;
	position(arg0: Blob, arg1: number): number;
	position(arg0: Array<number>, arg1: number): number;
	setBinaryStream(arg0: number): OutputStream;
	setBytes(arg0: number, arg1: Array<number>): number;
	setBytes(arg0: number, arg1: Array<number>, arg2: number, arg3: number): number;
	truncate(arg0: number): void;
}

export default class Blob {
	public static get $javaClass(): any {
		return Java.type('java.sql.Blob');
	}

}

