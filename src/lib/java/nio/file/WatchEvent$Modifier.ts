declare var Java: any;

export default interface WatchEvent$Modifier {
	name(): string;
}

export default class WatchEvent$Modifier {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.WatchEvent$Modifier');
	}

}

