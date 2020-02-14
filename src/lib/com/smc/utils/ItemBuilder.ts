declare var Java: any;
import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'

export default interface ItemBuilder {
	addEnchant(enchantment: Enchantment): ItemBuilder;
	addEnchant(enchantment: Enchantment, level: number): ItemBuilder;
	addEnchant(enchantment: Enchantment, level: number, ignoreLevelRestriction: boolean): ItemBuilder;
	build(): ItemStack;
	getDisplayName(): string;
	getLore(): Array<string>;
	isUnbreakable(isUnbreakable: boolean): ItemBuilder;
	removeEnchantment(enchantment: Enchantment): ItemBuilder;
	setDisplayName(displayName: string): ItemBuilder;
	setLore(lore: Array<string>): ItemBuilder;
}

export default class ItemBuilder {
	public static get $javaClass(): any {
		return Java.type('com.smc.utils.ItemBuilder');
	}

	constructor(itemStack: ItemStack);
	constructor(material: Material);
	constructor(...args: any[]) {
		return new ItemBuilder.$javaClass(...args);
	}

	public static addEnchant$default(arg0: ItemBuilder, arg1: Enchantment, arg2: number, arg3: boolean, arg4: number, arg5: any): ItemBuilder;
	public static addEnchant$default(...args: any[]): any {
		return ItemBuilder.$javaClass.addEnchant$default(...args);
	}

}

