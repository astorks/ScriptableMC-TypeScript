import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface SmartItemBuilder {
    build(): ItemStack;
    addEnchant(enchantment: Enchantment, level: number, ignoreLevelRestriction: boolean): SmartItemBuilder;
    removeEnchantment(enchantment: Enchantment): SmartItemBuilder;
    setDisplayName(displayName: string): SmartItemBuilder;
    setLore(lore: Array<string>): SmartItemBuilder;
    isUnbreakable(isUnbreakable: boolean): SmartItemBuilder;
    getLore(): Array<string>;
    getDisplayName(): string;
}
export default class SmartItemBuilder {
    static get $javaClass(): any;
    constructor(itemStack: ItemStack);
}
