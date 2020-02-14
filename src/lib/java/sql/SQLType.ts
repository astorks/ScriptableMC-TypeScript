declare var Java: any;

export default interface SQLType {
	getName(): string;
	getVendor(): string;
	getVendorTypeNumber(): any;
}

export default class SQLType {
	public static get $javaClass(): any {
		return Java.type('java.sql.SQLType');
	}

}

