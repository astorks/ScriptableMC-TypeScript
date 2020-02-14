declare var Java: any;
import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'

export default interface ItemBuilder {
	getLore(): Array<string>;
	isUnbreakable(isUnbreakable: boolean): ItemBuilder;
	addEnchant(enchantment: Enchantment, level: number, ignoreLevelRestriction: boolean): ItemBuilder;
	removeEnchantment(enchantment: Enchantment): ItemBuilder;
	setLore(lore: Array<string>): ItemBuilder;
	build(): ItemStack;
	setDisplayName(displayName: string): ItemBuilder;
	getDisplayName(): string;
}

export default class ItemBuilder {
	public static get $javaClass(): any {
		return Java.type('com.smc.utils.ItemBuilder');
	}
	constructor(material: Material);
	constructor(itemStack: ItemStack);
	constructor(...args: any[]) {
		return new ItemBuilder.$javaClass(...args);
	}
}

