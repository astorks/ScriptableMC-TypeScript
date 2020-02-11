import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface SmartItemBuilder {
    build(): ItemStack;
    getDisplayName(): string;
    setLore(lore: Array<string>): SmartItemBuilder;
    removeEnchantment(enchantment: Enchantment): SmartItemBuilder;
    getLore(): Array<string>;
    setDisplayName(displayName: string): SmartItemBuilder;
    isUnbreakable(isUnbreakable: boolean): SmartItemBuilder;
    addEnchant(enchantment: Enchantment, level: number, ignoreLevelRestriction: boolean): SmartItemBuilder;
}
export default class SmartItemBuilder {
    static get $javaClass(): any;
    constructor(itemStack: ItemStack);
    constructor(material: Material);
}
