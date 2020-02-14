declare var Java: any;
import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js'
import EnchantmentTarget from '../../../org/bukkit/enchantments/EnchantmentTarget.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'

export default interface EnchantmentWrapper extends Enchantment {
	canEnchantItem(item: ItemStack): boolean;
	conflictsWith(other: Enchantment): boolean;
	getEnchantment(): Enchantment;
	getItemTarget(): EnchantmentTarget;
	getKey(): NamespacedKey;
	getMaxLevel(): number;
	getName(): string;
	getStartLevel(): number;
	isCursed(): boolean;
	isTreasure(): boolean;
}

export default class EnchantmentWrapper {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.enchantments.EnchantmentWrapper');
	}

	constructor(_name: string);
	constructor(...args: any[]) {
		return new EnchantmentWrapper.$javaClass(...args);
	}

	public static get ARROW_DAMAGE(): Enchantment {
		return EnchantmentWrapper.$javaClass.ARROW_DAMAGE;
	}

	public static get ARROW_FIRE(): Enchantment {
		return EnchantmentWrapper.$javaClass.ARROW_FIRE;
	}

	public static get ARROW_INFINITE(): Enchantment {
		return EnchantmentWrapper.$javaClass.ARROW_INFINITE;
	}

	public static get ARROW_KNOCKBACK(): Enchantment {
		return EnchantmentWrapper.$javaClass.ARROW_KNOCKBACK;
	}

	public static get BINDING_CURSE(): Enchantment {
		return EnchantmentWrapper.$javaClass.BINDING_CURSE;
	}

	public static get CHANNELING(): Enchantment {
		return EnchantmentWrapper.$javaClass.CHANNELING;
	}

	public static get DAMAGE_ALL(): Enchantment {
		return EnchantmentWrapper.$javaClass.DAMAGE_ALL;
	}

	public static get DAMAGE_ARTHROPODS(): Enchantment {
		return EnchantmentWrapper.$javaClass.DAMAGE_ARTHROPODS;
	}

	public static get DAMAGE_UNDEAD(): Enchantment {
		return EnchantmentWrapper.$javaClass.DAMAGE_UNDEAD;
	}

	public static get DEPTH_STRIDER(): Enchantment {
		return EnchantmentWrapper.$javaClass.DEPTH_STRIDER;
	}

	public static get DIG_SPEED(): Enchantment {
		return EnchantmentWrapper.$javaClass.DIG_SPEED;
	}

	public static get DURABILITY(): Enchantment {
		return EnchantmentWrapper.$javaClass.DURABILITY;
	}

	public static get FIRE_ASPECT(): Enchantment {
		return EnchantmentWrapper.$javaClass.FIRE_ASPECT;
	}

	public static get FROST_WALKER(): Enchantment {
		return EnchantmentWrapper.$javaClass.FROST_WALKER;
	}

	public static get IMPALING(): Enchantment {
		return EnchantmentWrapper.$javaClass.IMPALING;
	}

	public static get KNOCKBACK(): Enchantment {
		return EnchantmentWrapper.$javaClass.KNOCKBACK;
	}

	public static get LOOT_BONUS_BLOCKS(): Enchantment {
		return EnchantmentWrapper.$javaClass.LOOT_BONUS_BLOCKS;
	}

	public static get LOOT_BONUS_MOBS(): Enchantment {
		return EnchantmentWrapper.$javaClass.LOOT_BONUS_MOBS;
	}

	public static get LOYALTY(): Enchantment {
		return EnchantmentWrapper.$javaClass.LOYALTY;
	}

	public static get LUCK(): Enchantment {
		return EnchantmentWrapper.$javaClass.LUCK;
	}

	public static get LURE(): Enchantment {
		return EnchantmentWrapper.$javaClass.LURE;
	}

	public static get MENDING(): Enchantment {
		return EnchantmentWrapper.$javaClass.MENDING;
	}

	public static get MULTISHOT(): Enchantment {
		return EnchantmentWrapper.$javaClass.MULTISHOT;
	}

	public static get OXYGEN(): Enchantment {
		return EnchantmentWrapper.$javaClass.OXYGEN;
	}

	public static get PIERCING(): Enchantment {
		return EnchantmentWrapper.$javaClass.PIERCING;
	}

	public static get PROTECTION_ENVIRONMENTAL(): Enchantment {
		return EnchantmentWrapper.$javaClass.PROTECTION_ENVIRONMENTAL;
	}

	public static get PROTECTION_EXPLOSIONS(): Enchantment {
		return EnchantmentWrapper.$javaClass.PROTECTION_EXPLOSIONS;
	}

	public static get PROTECTION_FALL(): Enchantment {
		return EnchantmentWrapper.$javaClass.PROTECTION_FALL;
	}

	public static get PROTECTION_FIRE(): Enchantment {
		return EnchantmentWrapper.$javaClass.PROTECTION_FIRE;
	}

	public static get PROTECTION_PROJECTILE(): Enchantment {
		return EnchantmentWrapper.$javaClass.PROTECTION_PROJECTILE;
	}

	public static get QUICK_CHARGE(): Enchantment {
		return EnchantmentWrapper.$javaClass.QUICK_CHARGE;
	}

	public static get RIPTIDE(): Enchantment {
		return EnchantmentWrapper.$javaClass.RIPTIDE;
	}

	public static get SILK_TOUCH(): Enchantment {
		return EnchantmentWrapper.$javaClass.SILK_TOUCH;
	}

	public static get SWEEPING_EDGE(): Enchantment {
		return EnchantmentWrapper.$javaClass.SWEEPING_EDGE;
	}

	public static get THORNS(): Enchantment {
		return EnchantmentWrapper.$javaClass.THORNS;
	}

	public static get VANISHING_CURSE(): Enchantment {
		return EnchantmentWrapper.$javaClass.VANISHING_CURSE;
	}

	public static get WATER_WORKER(): Enchantment {
		return EnchantmentWrapper.$javaClass.WATER_WORKER;
	}

	public static getByKey(key: NamespacedKey): Enchantment;
	public static getByKey(...args: any[]): any {
		return EnchantmentWrapper.$javaClass.getByKey(...args);
	}

	public static getByName(_name: string): Enchantment;
	public static getByName(...args: any[]): any {
		return EnchantmentWrapper.$javaClass.getByName(...args);
	}

	public static isAcceptingRegistrations(): boolean;
	public static isAcceptingRegistrations(...args: any[]): any {
		return EnchantmentWrapper.$javaClass.isAcceptingRegistrations(...args);
	}

	public static registerEnchantment(enchantment: Enchantment): void;
	public static registerEnchantment(...args: any[]): any {
		return EnchantmentWrapper.$javaClass.registerEnchantment(...args);
	}

	public static stopAcceptingRegistrations(): void;
	public static stopAcceptingRegistrations(...args: any[]): any {
		return EnchantmentWrapper.$javaClass.stopAcceptingRegistrations(...args);
	}

	public static values(): Array<Enchantment>;
	public static values(...args: any[]): any {
		return EnchantmentWrapper.$javaClass.values(...args);
	}

}

