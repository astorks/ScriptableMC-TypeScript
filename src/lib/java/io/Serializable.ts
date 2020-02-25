declare var Java: any;

export default class Serializable {
	public static get $javaClass(): any {
		return Java.type('java.io.Serializable');
	}

}

