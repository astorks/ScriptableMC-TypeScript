declare var Java: any;
import Closeable from '../../../java/io/Closeable.js'
import WatchKey from '../../../java/nio/file/WatchKey.js'

export default interface WatchService {
	take(): WatchKey;
	poll(arg0: number, arg1: any): WatchKey;
	poll(): WatchKey;
	close(): void;
}

export default class WatchService {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.WatchService');
	}
}

