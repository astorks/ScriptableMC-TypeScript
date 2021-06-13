declare var Java: any;

export default interface PermissionDefault {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static getByName(_name: string): PermissionDefault;
	public static getByName(...args: any[]): any {
		return PermissionDefault.$javaClass.getByName(...args);
	}

	public static valueOf(arg0: string): PermissionDefault;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return PermissionDefault.$javaClass.valueOf(...args);
	}

	public static values(): Array<PermissionDefault>;
	public static values(...args: any[]): any {
		return PermissionDefault.$javaClass.values(...args);
	}

}

