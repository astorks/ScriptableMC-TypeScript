declare var Java: any;

export default interface ItemFlag {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class ItemFlag {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ItemFlag');
	}

	public static get HIDE_ATTRIBUTES(): ItemFlag {
		return this.$javaClass.HIDE_ATTRIBUTES;
	}
	public static get HIDE_DESTROYS(): ItemFlag {
		return this.$javaClass.HIDE_DESTROYS;
	}
	public static get HIDE_DYE(): ItemFlag {
		return this.$javaClass.HIDE_DYE;
	}
	public static get HIDE_ENCHANTS(): ItemFlag {
		return this.$javaClass.HIDE_ENCHANTS;
	}
	public static get HIDE_PLACED_ON(): ItemFlag {
		return this.$javaClass.HIDE_PLACED_ON;
	}
	public static get HIDE_POTION_EFFECTS(): ItemFlag {
		return this.$javaClass.HIDE_POTION_EFFECTS;
	}
	public static get HIDE_UNBREAKABLE(): ItemFlag {
		return this.$javaClass.HIDE_UNBREAKABLE;
	}
	public static valueOf(arg0: string): ItemFlag;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return ItemFlag.$javaClass.valueOf(...args);
	}

	public static values(): Array<ItemFlag>;
	public static values(...args: any[]): any {
		return ItemFlag.$javaClass.values(...args);
	}

}

