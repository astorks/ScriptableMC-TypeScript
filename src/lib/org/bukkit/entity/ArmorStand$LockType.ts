declare var Java: any;

export default interface ArmorStand$LockType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class ArmorStand$LockType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.ArmorStand$LockType');
	}

	public static get ADDING(): ArmorStand$LockType {
		return this.$javaClass.ADDING;
	}
	public static get ADDING_OR_CHANGING(): ArmorStand$LockType {
		return this.$javaClass.ADDING_OR_CHANGING;
	}
	public static get REMOVING_OR_CHANGING(): ArmorStand$LockType {
		return this.$javaClass.REMOVING_OR_CHANGING;
	}
	public static valueOf(arg0: string): ArmorStand$LockType;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return ArmorStand$LockType.$javaClass.valueOf(...args);
	}

	public static values(): Array<ArmorStand$LockType>;
	public static values(...args: any[]): any {
		return ArmorStand$LockType.$javaClass.values(...args);
	}

}

