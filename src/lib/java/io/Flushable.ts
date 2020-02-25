declare var Java: any;

export default interface Flushable {
	flush(): void;
}

export default class Flushable {
	public static get $javaClass(): any {
		return Java.type('java.io.Flushable');
	}

}

