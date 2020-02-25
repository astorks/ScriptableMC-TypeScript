declare var Java: any;

export default class CodingErrorAction {
	public static get $javaClass(): any {
		return Java.type('java.nio.charset.CodingErrorAction');
	}

	public static get IGNORE(): CodingErrorAction {
		return CodingErrorAction.$javaClass.IGNORE;
	}

	public static get REPLACE(): CodingErrorAction {
		return CodingErrorAction.$javaClass.REPLACE;
	}

	public static get REPORT(): CodingErrorAction {
		return CodingErrorAction.$javaClass.REPORT;
	}

}

