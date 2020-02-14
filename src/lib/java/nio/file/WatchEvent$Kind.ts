declare var Java: any;

export default interface WatchEvent$Kind {
	name(): string;
	type(): any;
}

export default class WatchEvent$Kind {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.WatchEvent$Kind');
	}

}

