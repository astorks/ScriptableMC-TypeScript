declare var Java: any;
import EnchantmentTarget from '../../../org/bukkit/enchantments/EnchantmentTarget.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Keyed from '../../../org/bukkit/Keyed.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'

export default interface Enchantment extends Keyed {
	canEnchantItem(arg0: ItemStack): boolean;
	conflictsWith(arg0: Enchantment): boolean;
	getItemTarget(): EnchantmentTarget;
	getKey(): NamespacedKey;
	getMaxLevel(): number;
	getName(): string;
	getStartLevel(): number;
	isCursed(): boolean;
	isTreasure(): boolean;
}

export default class Enchantment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.enchantments.Enchantment');
	}

	constructor(key: NamespacedKey);
	constructor(...args: any[]) {
		return new Enchantment.$javaClass(...args);
	}

	public static get ARROW_DAMAGE(): Enchantment {
		return Enchantment.$javaClass.ARROW_DAMAGE;
	}

	public static get ARROW_FIRE(): Enchantment {
		return Enchantment.$javaClass.ARROW_FIRE;
	}

	public static get ARROW_INFINITE(): Enchantment {
		return Enchantment.$javaClass.ARROW_INFINITE;
	}

	public static get ARROW_KNOCKBACK(): Enchantment {
		return Enchantment.$javaClass.ARROW_KNOCKBACK;
	}

	public static get BINDING_CURSE(): Enchantment {
		return Enchantment.$javaClass.BINDING_CURSE;
	}

	public static get CHANNELING(): Enchantment {
		return Enchantment.$javaClass.CHANNELING;
	}

	public static get DAMAGE_ALL(): Enchantment {
		return Enchantment.$javaClass.DAMAGE_ALL;
	}

	public static get DAMAGE_ARTHROPODS(): Enchantment {
		return Enchantment.$javaClass.DAMAGE_ARTHROPODS;
	}

	public static get DAMAGE_UNDEAD(): Enchantment {
		return Enchantment.$javaClass.DAMAGE_UNDEAD;
	}

	public static get DEPTH_STRIDER(): Enchantment {
		return Enchantment.$javaClass.DEPTH_STRIDER;
	}

	public static get DIG_SPEED(): Enchantment {
		return Enchantment.$javaClass.DIG_SPEED;
	}

	public static get DURABILITY(): Enchantment {
		return Enchantment.$javaClass.DURABILITY;
	}

	public static get FIRE_ASPECT(): Enchantment {
		return Enchantment.$javaClass.FIRE_ASPECT;
	}

	public static get FROST_WALKER(): Enchantment {
		return Enchantment.$javaClass.FROST_WALKER;
	}

	public static get IMPALING(): Enchantment {
		return Enchantment.$javaClass.IMPALING;
	}

	public static get KNOCKBACK(): Enchantment {
		return Enchantment.$javaClass.KNOCKBACK;
	}

	public static get LOOT_BONUS_BLOCKS(): Enchantment {
		return Enchantment.$javaClass.LOOT_BONUS_BLOCKS;
	}

	public static get LOOT_BONUS_MOBS(): Enchantment {
		return Enchantment.$javaClass.LOOT_BONUS_MOBS;
	}

	public static get LOYALTY(): Enchantment {
		return Enchantment.$javaClass.LOYALTY;
	}

	public static get LUCK(): Enchantment {
		return Enchantment.$javaClass.LUCK;
	}

	public static get LURE(): Enchantment {
		return Enchantment.$javaClass.LURE;
	}

	public static get MENDING(): Enchantment {
		return Enchantment.$javaClass.MENDING;
	}

	public static get MULTISHOT(): Enchantment {
		return Enchantment.$javaClass.MULTISHOT;
	}

	public static get OXYGEN(): Enchantment {
		return Enchantment.$javaClass.OXYGEN;
	}

	public static get PIERCING(): Enchantment {
		return Enchantment.$javaClass.PIERCING;
	}

	public static get PROTECTION_ENVIRONMENTAL(): Enchantment {
		return Enchantment.$javaClass.PROTECTION_ENVIRONMENTAL;
	}

	public static get PROTECTION_EXPLOSIONS(): Enchantment {
		return Enchantment.$javaClass.PROTECTION_EXPLOSIONS;
	}

	public static get PROTECTION_FALL(): Enchantment {
		return Enchantment.$javaClass.PROTECTION_FALL;
	}

	public static get PROTECTION_FIRE(): Enchantment {
		return Enchantment.$javaClass.PROTECTION_FIRE;
	}

	public static get PROTECTION_PROJECTILE(): Enchantment {
		return Enchantment.$javaClass.PROTECTION_PROJECTILE;
	}

	public static get QUICK_CHARGE(): Enchantment {
		return Enchantment.$javaClass.QUICK_CHARGE;
	}

	public static get RIPTIDE(): Enchantment {
		return Enchantment.$javaClass.RIPTIDE;
	}

	public static get SILK_TOUCH(): Enchantment {
		return Enchantment.$javaClass.SILK_TOUCH;
	}

	public static get SWEEPING_EDGE(): Enchantment {
		return Enchantment.$javaClass.SWEEPING_EDGE;
	}

	public static get THORNS(): Enchantment {
		return Enchantment.$javaClass.THORNS;
	}

	public static get VANISHING_CURSE(): Enchantment {
		return Enchantment.$javaClass.VANISHING_CURSE;
	}

	public static get WATER_WORKER(): Enchantment {
		return Enchantment.$javaClass.WATER_WORKER;
	}

	public static getByKey(key: NamespacedKey): Enchantment;
	public static getByKey(...args: any[]): any {
		return Enchantment.$javaClass.getByKey(...args);
	}

	public static getByName(_name: string): Enchantment;
	public static getByName(...args: any[]): any {
		return Enchantment.$javaClass.getByName(...args);
	}

	public static isAcceptingRegistrations(): boolean;
	public static isAcceptingRegistrations(...args: any[]): any {
		return Enchantment.$javaClass.isAcceptingRegistrations(...args);
	}

	public static registerEnchantment(enchantment: Enchantment): void;
	public static registerEnchantment(...args: any[]): any {
		return Enchantment.$javaClass.registerEnchantment(...args);
	}

	public static stopAcceptingRegistrations(): void;
	public static stopAcceptingRegistrations(...args: any[]): any {
		return Enchantment.$javaClass.stopAcceptingRegistrations(...args);
	}

	public static values(): Array<Enchantment>;
	public static values(...args: any[]): any {
		return Enchantment.$javaClass.values(...args);
	}

}

