declare var Java: any;

export default interface SQLType {
	getVendor(): string;
	getVendorTypeNumber(): any;
	getName(): string;
}

export default class SQLType {
	public static get $javaClass(): any {
		return Java.type('java.sql.SQLType');
	}
}

