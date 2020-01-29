import { Enchantment } from '../../../org/bukkit/enchantments/Enchantment.js';
export interface EnchantmentOffer {
    getEnchantmentLevel(): number;
    getEnchantment(): Enchantment;
    setEnchantmentLevel(enchantmentLevel: number): void;
    getCost(): number;
    setEnchantment(enchantment: Enchantment): void;
    setCost(cost: number): void;
}
export declare class EnchantmentOffer {
    static get $javaClass(): any;
    constructor(enchantment: Enchantment, enchantmentLevel: number, cost: number);
}
