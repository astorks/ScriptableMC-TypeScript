declare var Java: any;
import Watchable from '../../../java/nio/file/Watchable.js'

export default interface WatchKey {
	isValid(): boolean;
	pollEvents(): Array<any>;
	cancel(): void;
	watchable(): Watchable;
	reset(): boolean;
}

export default class WatchKey {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.WatchKey');
	}
}

