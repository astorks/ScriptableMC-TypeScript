import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Enchantment } from '../../../../org/bukkit/enchantments/Enchantment.js';
export interface SmartItemBuilder {
    build(): ItemStack;
    getDisplayName(): string;
    setDisplayName(displayName: string): SmartItemBuilder;
    getLore(): Array<string>;
    setLore(lore: Array<string>): SmartItemBuilder;
    addEnchant(enchantment: Enchantment, level: number, ignoreLevelRestriction: boolean): SmartItemBuilder;
    removeEnchantment(enchantment: Enchantment): SmartItemBuilder;
    isUnbreakable(isUnbreakable: boolean): SmartItemBuilder;
}
export declare class SmartItemBuilder {
    static get $javaClass(): any;
    constructor(itemStack: ItemStack);
}
