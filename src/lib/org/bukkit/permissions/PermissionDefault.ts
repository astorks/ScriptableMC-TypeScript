declare var Java: any;

export default interface PermissionDefault {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	getValue(op: boolean): boolean;
	name(): string;
	ordinal(): number;
}

export default class PermissionDefault {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.PermissionDefault');
	}

	public static get FALSE(): PermissionDefault {
		return this.$javaClass.FALSE;
	}
	public static get NOT_OP(): PermissionDefault {
		return this.$javaClass.NOT_OP;
	}
	public static get OP(): PermissionDefault {
		return this.$javaClass.OP;
	}
	public static get TRUE(): PermissionDefault {
		return this.$javaClass.TRUE;
	}
}

