declare var Java: any;

export default class OpenOption {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.OpenOption');
	}

}

