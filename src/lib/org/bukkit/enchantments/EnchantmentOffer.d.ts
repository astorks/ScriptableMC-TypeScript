import { Enchantment } from '../../../org/bukkit/enchantments/Enchantment.js';
export interface EnchantmentOffer {
    getEnchantmentLevel(): number;
    getEnchantment(): Enchantment;
    getCost(): number;
    setEnchantment(enchantment: Enchantment): void;
    setEnchantmentLevel(enchantmentLevel: number): void;
    setCost(cost: number): void;
}
export declare class EnchantmentOffer {
    static get $javaClass(): any;
    constructor(enchantment: Enchantment, enchantmentLevel: number, cost: number);
}
