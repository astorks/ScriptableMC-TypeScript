declare var Java: any;
import WatchEvent$Kind from '../../../java/nio/file/WatchEvent$Kind.js'
import WatchEvent$Modifier from '../../../java/nio/file/WatchEvent$Modifier.js'
import WatchKey from '../../../java/nio/file/WatchKey.js'
import WatchService from '../../../java/nio/file/WatchService.js'

export default interface Watchable {
	register(arg0: WatchService, arg1: Array<WatchEvent$Kind>): WatchKey;
	register(arg0: WatchService, arg1: Array<WatchEvent$Kind>, arg2: Array<WatchEvent$Modifier>): WatchKey;
}

export default class Watchable {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.Watchable');
	}

}

