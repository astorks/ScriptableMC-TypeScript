declare var Java: any;

export default interface RowIdLifetime {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class RowIdLifetime {
	public static get $javaClass(): any {
		return Java.type('java.sql.RowIdLifetime');
	}

	public static get ROWID_UNSUPPORTED(): RowIdLifetime {
		return this.$javaClass.ROWID_UNSUPPORTED;
	}
	public static get ROWID_VALID_FOREVER(): RowIdLifetime {
		return this.$javaClass.ROWID_VALID_FOREVER;
	}
	public static get ROWID_VALID_OTHER(): RowIdLifetime {
		return this.$javaClass.ROWID_VALID_OTHER;
	}
	public static get ROWID_VALID_SESSION(): RowIdLifetime {
		return this.$javaClass.ROWID_VALID_SESSION;
	}
	public static get ROWID_VALID_TRANSACTION(): RowIdLifetime {
		return this.$javaClass.ROWID_VALID_TRANSACTION;
	}
	public static valueOf(_name: string): RowIdLifetime;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return RowIdLifetime.$javaClass.valueOf(...args);
	}

	public static values(): Array<RowIdLifetime>;
	public static values(...args: any[]): any {
		return RowIdLifetime.$javaClass.values(...args);
	}

}

