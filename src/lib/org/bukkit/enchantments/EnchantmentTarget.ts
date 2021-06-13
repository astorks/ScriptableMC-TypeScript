declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'

export default interface EnchantmentTarget {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	includes(item: ItemStack): boolean;
	includes(arg0: Material): boolean;
	name(): string;
	ordinal(): number;
}

export default class EnchantmentTarget {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.enchantments.EnchantmentTarget');
	}

	public static get ALL(): EnchantmentTarget {
		return this.$javaClass.ALL;
	}
	public static get ARMOR(): EnchantmentTarget {
		return this.$javaClass.ARMOR;
	}
	public static get ARMOR_FEET(): EnchantmentTarget {
		return this.$javaClass.ARMOR_FEET;
	}
	public static get ARMOR_HEAD(): EnchantmentTarget {
		return this.$javaClass.ARMOR_HEAD;
	}
	public static get ARMOR_LEGS(): EnchantmentTarget {
		return this.$javaClass.ARMOR_LEGS;
	}
	public static get ARMOR_TORSO(): EnchantmentTarget {
		return this.$javaClass.ARMOR_TORSO;
	}
	public static get BOW(): EnchantmentTarget {
		return this.$javaClass.BOW;
	}
	public static get BREAKABLE(): EnchantmentTarget {
		return this.$javaClass.BREAKABLE;
	}
	public static get CROSSBOW(): EnchantmentTarget {
		return this.$javaClass.CROSSBOW;
	}
	public static get FISHING_ROD(): EnchantmentTarget {
		return this.$javaClass.FISHING_ROD;
	}
	public static get TOOL(): EnchantmentTarget {
		return this.$javaClass.TOOL;
	}
	public static get TRIDENT(): EnchantmentTarget {
		return this.$javaClass.TRIDENT;
	}
	public static get VANISHABLE(): EnchantmentTarget {
		return this.$javaClass.VANISHABLE;
	}
	public static get WEAPON(): EnchantmentTarget {
		return this.$javaClass.WEAPON;
	}
	public static get WEARABLE(): EnchantmentTarget {
		return this.$javaClass.WEARABLE;
	}
	public static valueOf(arg0: string): EnchantmentTarget;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return EnchantmentTarget.$javaClass.valueOf(...args);
	}

	public static values(): Array<EnchantmentTarget>;
	public static values(...args: any[]): any {
		return EnchantmentTarget.$javaClass.values(...args);
	}

}

