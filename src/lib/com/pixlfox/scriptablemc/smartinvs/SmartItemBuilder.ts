declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Enchantment} from '../../../../org/bukkit/enchantments/Enchantment.js'

export interface SmartItemBuilder {
	build(): ItemStack;
	isUnbreakable(isUnbreakable: boolean): SmartItemBuilder;
	addEnchant(enchantment: Enchantment, level: number, ignoreLevelRestriction: boolean): SmartItemBuilder;
	removeEnchantment(enchantment: Enchantment): SmartItemBuilder;
	getLore(): Array<string>;
	setLore(lore: Array<string>): SmartItemBuilder;
	setDisplayName(displayName: string): SmartItemBuilder;
	getDisplayName(): string;
}

export class SmartItemBuilder {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.smartinvs.SmartItemBuilder');
	}
	constructor(itemStack: ItemStack);
	constructor(...args: any[]) {
		return new SmartItemBuilder.$javaClass(...args);
	}
}

