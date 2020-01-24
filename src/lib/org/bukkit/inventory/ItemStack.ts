declare var Java: any;
import {Material} from '../../../org/bukkit/Material.js'
import {Enchantment} from '../../../org/bukkit/enchantments/Enchantment.js'
import {ItemMeta} from '../../../org/bukkit/inventory/meta/ItemMeta.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface ItemStack extends ConfigurationSerializable {
	clone(): any;
	clone(): ItemStack;
	getType(): Material;
	getEnchantmentLevel(ench: Enchantment): number;
	containsEnchantment(ench: Enchantment): boolean;
	addUnsafeEnchantment(ench: Enchantment, level: number): void;
	addUnsafeEnchantments(enchantments: any): void;
	serialize(): any;
	setDurability(durability: number): void;
	getAmount(): number;
	hasItemMeta(): boolean;
	getItemMeta(): ItemMeta;
	setType(type: Material): void;
	setAmount(amount: number): void;
	getDurability(): number;
	getData(): MaterialData;
	getMaxStackSize(): number;
	setItemMeta(itemMeta: ItemMeta): boolean;
	setData(data: MaterialData): void;
	isSimilar(stack: ItemStack): boolean;
	addEnchantments(enchantments: any): void;
	getEnchantments(): any;
	addEnchantment(ench: Enchantment, level: number): void;
	removeEnchantment(ench: Enchantment): number;
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

