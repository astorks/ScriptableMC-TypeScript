declare var Java: any;

export default interface InventoryType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	getDefaultSize(): number;
	getDefaultTitle(): string;
	isCreatable(): boolean;
	name(): string;
	ordinal(): number;
}

export default class InventoryType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryType');
	}

	public static get ANVIL(): InventoryType {
		return this.$javaClass.ANVIL;
	}
	public static get BARREL(): InventoryType {
		return this.$javaClass.BARREL;
	}
	public static get BEACON(): InventoryType {
		return this.$javaClass.BEACON;
	}
	public static get BLAST_FURNACE(): InventoryType {
		return this.$javaClass.BLAST_FURNACE;
	}
	public static get BREWING(): InventoryType {
		return this.$javaClass.BREWING;
	}
	public static get CARTOGRAPHY(): InventoryType {
		return this.$javaClass.CARTOGRAPHY;
	}
	public static get CHEST(): InventoryType {
		return this.$javaClass.CHEST;
	}
	public static get CRAFTING(): InventoryType {
		return this.$javaClass.CRAFTING;
	}
	public static get CREATIVE(): InventoryType {
		return this.$javaClass.CREATIVE;
	}
	public static get DISPENSER(): InventoryType {
		return this.$javaClass.DISPENSER;
	}
	public static get DROPPER(): InventoryType {
		return this.$javaClass.DROPPER;
	}
	public static get ENCHANTING(): InventoryType {
		return this.$javaClass.ENCHANTING;
	}
	public static get ENDER_CHEST(): InventoryType {
		return this.$javaClass.ENDER_CHEST;
	}
	public static get FURNACE(): InventoryType {
		return this.$javaClass.FURNACE;
	}
	public static get GRINDSTONE(): InventoryType {
		return this.$javaClass.GRINDSTONE;
	}
	public static get HOPPER(): InventoryType {
		return this.$javaClass.HOPPER;
	}
	public static get LECTERN(): InventoryType {
		return this.$javaClass.LECTERN;
	}
	public static get LOOM(): InventoryType {
		return this.$javaClass.LOOM;
	}
	public static get MERCHANT(): InventoryType {
		return this.$javaClass.MERCHANT;
	}
	public static get PLAYER(): InventoryType {
		return this.$javaClass.PLAYER;
	}
	public static get SHULKER_BOX(): InventoryType {
		return this.$javaClass.SHULKER_BOX;
	}
	public static get SMOKER(): InventoryType {
		return this.$javaClass.SMOKER;
	}
	public static get STONECUTTER(): InventoryType {
		return this.$javaClass.STONECUTTER;
	}
	public static get WORKBENCH(): InventoryType {
		return this.$javaClass.WORKBENCH;
	}
}

