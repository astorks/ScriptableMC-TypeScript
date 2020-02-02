import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface SmartItemBuilder {
    build(): ItemStack;
    getDisplayName(): string;
    setDisplayName(displayName: string): SmartItemBuilder;
    setLore(lore: Array<string>): SmartItemBuilder;
    addEnchant(enchantment: Enchantment, level: number, ignoreLevelRestriction: boolean): SmartItemBuilder;
    removeEnchantment(enchantment: Enchantment): SmartItemBuilder;
    getLore(): Array<string>;
    isUnbreakable(isUnbreakable: boolean): SmartItemBuilder;
}
export default class SmartItemBuilder {
    static get $javaClass(): any;
    constructor(itemStack: ItemStack);
}
