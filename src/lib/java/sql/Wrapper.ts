declare var Java: any;

export default interface Wrapper {
	isWrapperFor(arg0: any): boolean;
	unwrap(arg0: any): any;
}

export default class Wrapper {
	public static get $javaClass(): any {
		return Java.type('java.sql.Wrapper');
	}

}

