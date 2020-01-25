declare var Java: any;
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'
import {ItemMeta} from '../../../org/bukkit/inventory/meta/ItemMeta.js'
import {Enchantment} from '../../../org/bukkit/enchantments/Enchantment.js'
import {Material} from '../../../org/bukkit/Material.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface ItemStack extends ConfigurationSerializable {
	setData(data: MaterialData): void;
	setItemMeta(itemMeta: ItemMeta): boolean;
	getMaxStackSize(): number;
	isSimilar(stack: ItemStack): boolean;
	containsEnchantment(ench: Enchantment): boolean;
	getEnchantmentLevel(ench: Enchantment): number;
	getEnchantments(): any;
	addEnchantments(enchantments: any): void;
	addEnchantment(ench: Enchantment, level: number): void;
	getAmount(): number;
	getData(): MaterialData;
	hasItemMeta(): boolean;
	getItemMeta(): ItemMeta;
	setType(type: Material): void;
	setAmount(amount: number): void;
	getDurability(): number;
	setDurability(durability: number): void;
	addUnsafeEnchantment(ench: Enchantment, level: number): void;
	addUnsafeEnchantments(enchantments: any): void;
	removeEnchantment(ench: Enchantment): number;
	serialize(): any;
	clone(): any;
	clone(): ItemStack;
	getType(): Material;
}

export class ItemStack {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ItemStack');
	}
	constructor(type: Material, amount: number, damage: number);
	constructor(type: Material, amount: number);
	constructor(type: Material, amount: number, damage: number, data: number);
	constructor(type: Material);
	constructor(stack: ItemStack);
	constructor(...args: any[]) {
		return new ItemStack.$javaClass(...args);
	}
	public static deserialize(args: any): ItemStack;
	public static deserialize(...args: any[]): any {
		return ItemStack.$javaClass.deserialize(...args);
	}
}

