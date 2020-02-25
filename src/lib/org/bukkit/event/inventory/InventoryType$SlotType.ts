declare var Java: any;

export default interface InventoryType$SlotType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

