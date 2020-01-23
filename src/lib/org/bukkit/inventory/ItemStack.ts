declare var Java: any;
import {Material} from '../../../org/bukkit/Material.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'
import {ItemMeta} from '../../../org/bukkit/inventory/meta/ItemMeta.js'
import {Enchantment} from '../../../org/bukkit/enchantments/Enchantment.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface ItemStack extends ConfigurationSerializable {
	clone(): any;
	clone(): ItemStack;
	getType(): Material;
	getDurability(): number;
	setData(data: MaterialData): void;
	hasItemMeta(): boolean;
	getItemMeta(): ItemMeta;
	setType(type: Material): void;
	setAmount(amount: number): void;
	setDurability(durability: number): void;
	getAmount(): number;
	getData(): MaterialData;
	getEnchantmentLevel(ench: Enchantment): number;
	addUnsafeEnchantment(ench: Enchantment, level: number): void;
	addUnsafeEnchantments(enchantments: any): void;
	containsEnchantment(ench: Enchantment): boolean;
	serialize(): any;
	removeEnchantment(ench: Enchantment): number;
	getEnchantments(): any;
	addEnchantments(enchantments: any): void;
	setItemMeta(itemMeta: ItemMeta): boolean;
	getMaxStackSize(): number;
	isSimilar(stack: ItemStack): boolean;
	addEnchantment(ench: Enchantment, level: number): void;
}

export class ItemStack {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ItemStack');
	}
	constructor(stack: ItemStack);
	constructor(type: Material, amount: number, damage: number, data: number);
	constructor(type: Material, amount: number, damage: number);
	constructor(type: Material);
	constructor(type: Material, amount: number);
	constructor(...args: any[]) {
		return new ItemStack.$javaClass(...args);
	}
}

