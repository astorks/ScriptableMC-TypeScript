import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js';
export default interface EnchantmentOffer {
    getEnchantmentLevel(): number;
    getEnchantment(): Enchantment;
    getCost(): number;
    setCost(cost: number): void;
    setEnchantmentLevel(enchantmentLevel: number): void;
    setEnchantment(enchantment: Enchantment): void;
}
export default class EnchantmentOffer {
    static get $javaClass(): any;
    constructor(enchantment: Enchantment, enchantmentLevel: number, cost: number);
}
