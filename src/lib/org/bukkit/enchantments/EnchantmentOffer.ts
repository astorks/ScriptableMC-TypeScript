declare var Java: any;
import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js'

export default interface EnchantmentOffer {
	getEnchantmentLevel(): number;
	getEnchantment(): Enchantment;
	setEnchantmentLevel(enchantmentLevel: number): void;
	setCost(cost: number): void;
	getCost(): number;
	setEnchantment(enchantment: Enchantment): void;
}

export default class EnchantmentOffer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.enchantments.EnchantmentOffer');
	}
	constructor(enchantment: Enchantment, enchantmentLevel: number, cost: number);
	constructor(...args: any[]) {
		return new EnchantmentOffer.$javaClass(...args);
	}
}

