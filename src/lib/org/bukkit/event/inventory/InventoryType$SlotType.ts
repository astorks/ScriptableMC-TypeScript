declare var Java: any;

export default interface InventoryType$SlotType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class InventoryType$SlotType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryType$SlotType');
	}

	public static get ARMOR(): InventoryType$SlotType {
		return this.$javaClass.ARMOR;
	}
	public static get CONTAINER(): InventoryType$SlotType {
		return this.$javaClass.CONTAINER;
	}
	public static get CRAFTING(): InventoryType$SlotType {
		return this.$javaClass.CRAFTING;
	}
	public static get FUEL(): InventoryType$SlotType {
		return this.$javaClass.FUEL;
	}
	public static get OUTSIDE(): InventoryType$SlotType {
		return this.$javaClass.OUTSIDE;
	}
	public static get QUICKBAR(): InventoryType$SlotType {
		return this.$javaClass.QUICKBAR;
	}
	public static get RESULT(): InventoryType$SlotType {
		return this.$javaClass.RESULT;
	}
	public static valueOf(arg0: string): InventoryType$SlotType;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return InventoryType$SlotType.$javaClass.valueOf(...args);
	}

	public static values(): Array<InventoryType$SlotType>;
	public static values(...args: any[]): any {
		return InventoryType$SlotType.$javaClass.values(...args);
	}

}

