declare var Java: any;

export default interface EquipmentSlot {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class EquipmentSlot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.EquipmentSlot');
	}

	public static get CHEST(): EquipmentSlot {
		return this.$javaClass.CHEST;
	}
	public static get FEET(): EquipmentSlot {
		return this.$javaClass.FEET;
	}
	public static get HAND(): EquipmentSlot {
		return this.$javaClass.HAND;
	}
	public static get HEAD(): EquipmentSlot {
		return this.$javaClass.HEAD;
	}
	public static get LEGS(): EquipmentSlot {
		return this.$javaClass.LEGS;
	}
	public static get OFF_HAND(): EquipmentSlot {
		return this.$javaClass.OFF_HAND;
	}
	public static valueOf(arg0: string): EquipmentSlot;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return EquipmentSlot.$javaClass.valueOf(...args);
	}

	public static values(): Array<EquipmentSlot>;
	public static values(...args: any[]): any {
		return EquipmentSlot.$javaClass.values(...args);
	}

}

