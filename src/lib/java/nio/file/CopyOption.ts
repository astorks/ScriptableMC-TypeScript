declare var Java: any;

export default interface CopyOption {
}

export default class CopyOption {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.CopyOption');
	}
}

