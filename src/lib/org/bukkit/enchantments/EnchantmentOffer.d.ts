import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js';
export default interface EnchantmentOffer {
    getEnchantmentLevel(): number;
    getEnchantment(): Enchantment;
    setEnchantment(enchantment: Enchantment): void;
    setCost(cost: number): void;
    getCost(): number;
    setEnchantmentLevel(enchantmentLevel: number): void;
}
export default class EnchantmentOffer {
    static get $javaClass(): any;
    constructor(enchantment: Enchantment, enchantmentLevel: number, cost: number);
}
