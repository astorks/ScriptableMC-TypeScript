declare var Java: any;
import WatchEvent$Kind from './WatchEvent$Kind.js'
import WatchEvent$Modifier from './WatchEvent$Modifier.js'
import WatchKey from './WatchKey.js'
import WatchService from './WatchService.js'

export default interface Watchable {
	register(arg0: WatchService, arg1: Array<WatchEvent$Kind>): WatchKey;
	register(arg0: WatchService, arg1: Array<WatchEvent$Kind>, arg2: Array<WatchEvent$Modifier>): WatchKey;
}

export default class Watchable {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.Watchable');
	}

}

