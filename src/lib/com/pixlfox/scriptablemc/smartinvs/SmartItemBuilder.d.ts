import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Enchantment } from '../../../../org/bukkit/enchantments/Enchantment.js';
export interface SmartItemBuilder {
    build(): ItemStack;
    addEnchant(enchantment: Enchantment, level: number, ignoreLevelRestriction: boolean): SmartItemBuilder;
    removeEnchantment(enchantment: Enchantment): SmartItemBuilder;
    setLore(lore: Array<string>): SmartItemBuilder;
    setDisplayName(displayName: string): SmartItemBuilder;
    isUnbreakable(isUnbreakable: boolean): SmartItemBuilder;
    getLore(): Array<string>;
    getDisplayName(): string;
}
export declare class SmartItemBuilder {
    static get $javaClass(): any;
    constructor(itemStack: ItemStack);
}
