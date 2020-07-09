declare var Java: any;
import Closeable from '../../../java/io/Closeable.js'

export default interface DirectoryStream extends Closeable {
	close(): void;
	forEach(action: any): void;
	iterator(): any;
	spliterator(): any;
}

export default class DirectoryStream {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.DirectoryStream');
	}

}

