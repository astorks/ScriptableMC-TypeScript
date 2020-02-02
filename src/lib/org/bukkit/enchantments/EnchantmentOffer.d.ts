import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js';
export default interface EnchantmentOffer {
    getEnchantmentLevel(): number;
    getEnchantment(): Enchantment;
    setCost(cost: number): void;
    getCost(): number;
    setEnchantment(enchantment: Enchantment): void;
    setEnchantmentLevel(enchantmentLevel: number): void;
}
export default class EnchantmentOffer {
    static get $javaClass(): any;
    constructor(enchantment: Enchantment, enchantmentLevel: number, cost: number);
}
