declare var Java: any;

export default interface RowIdLifetime {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

