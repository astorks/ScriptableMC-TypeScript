declare var Java: any;

export default interface RowIdLifetime {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class RowIdLifetime {
	public static get $javaClass(): any {
		return Java.type('java.sql.RowIdLifetime');
	}

	public static get ROWID_UNSUPPORTED(): RowIdLifetime {
		return this.$javaClass.ROWID_UNSUPPORTED;
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
	public static get ROWID_VALID_FOREVER(): RowIdLifetime {
		return this.$javaClass.ROWID_VALID_FOREVER;
	}
}

