declare var Java: any;

export default interface Ref {
	setObject(arg0: any): void;
	getBaseTypeName(): string;
	getObject(arg0: any): any;
	getObject(): any;
}

export default class Ref {
	public static get $javaClass(): any {
		return Java.type('java.sql.Ref');
	}
}

