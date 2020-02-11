import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
export default interface ItemBuilder {
    build(): ItemStack;
    getDisplayName(): string;
    setLore(lore: Array<string>): ItemBuilder;
    setDisplayName(displayName: string): ItemBuilder;
    isUnbreakable(isUnbreakable: boolean): ItemBuilder;
    addEnchant(enchantment: Enchantment, level: number, ignoreLevelRestriction: boolean): ItemBuilder;
    getLore(): Array<string>;
    removeEnchantment(enchantment: Enchantment): ItemBuilder;
}
export default class ItemBuilder {
    static get $javaClass(): any;
    constructor(itemStack: ItemStack);
    constructor(material: Material);
}
