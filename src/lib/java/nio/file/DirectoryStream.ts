declare var Java: any;
import Closeable from '../../../java/io/Closeable.js'

export default interface DirectoryStream {
	iterator(): any;
	close(): void;
	spliterator(): any;
	forEach(arg0: any): void;
}

export default class DirectoryStream {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.DirectoryStream');
	}
}

