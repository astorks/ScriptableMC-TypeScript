import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js';
export default interface EnchantmentOffer {
    getEnchantmentLevel(): number;
    getEnchantment(): Enchantment;
    setEnchantment(enchantment: Enchantment): void;
    getCost(): number;
    setCost(cost: number): void;
    setEnchantmentLevel(enchantmentLevel: number): void;
}
export default class EnchantmentOffer {
    static get $javaClass(): any;
    constructor(enchantment: Enchantment, enchantmentLevel: number, cost: number);
}
