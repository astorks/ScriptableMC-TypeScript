declare var Java: any;

export default interface Struct {
	getAttributes(): Array<any>;
	getAttributes(arg0: any): Array<any>;
	getSQLTypeName(): string;
}

export default class Struct {
	public static get $javaClass(): any {
		return Java.type('java.sql.Struct');
	}

}

