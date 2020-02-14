declare var Java: any;

export default interface Closeable {
	close(): void;
}

export default class Closeable {
	public static get $javaClass(): any {
		return Java.type('java.io.Closeable');
	}

}

