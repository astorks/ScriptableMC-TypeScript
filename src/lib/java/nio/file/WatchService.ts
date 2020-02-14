declare var Java: any;
import Closeable from '../../../java/io/Closeable.js'
import WatchKey from '../../../java/nio/file/WatchKey.js'

export default interface WatchService {
	close(): void;
	poll(): WatchKey;
	poll(arg0: number, arg1: any): WatchKey;
	take(): WatchKey;
}

export default class WatchService {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.WatchService');
	}

}

