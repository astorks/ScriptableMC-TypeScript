declare var Java: any;
import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js'

export default interface EnchantmentOffer {
	getCost(): number;
	getEnchantment(): Enchantment;
	getEnchantmentLevel(): number;
	setCost(cost: number): void;
	setEnchantment(enchantment: Enchantment): void;
	setEnchantmentLevel(enchantmentLevel: number): void;
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

