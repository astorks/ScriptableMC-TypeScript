declare var Java: any;
import Watchable from './Watchable.js'

export default interface WatchKey {
	cancel(): void;
	isValid(): boolean;
	pollEvents(): Array<any>;
	reset(): boolean;
	watchable(): Watchable;
}

export default class WatchKey {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.WatchKey');
	}

}

