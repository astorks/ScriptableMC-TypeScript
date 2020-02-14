declare var Java: any;
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js'
import ItemMeta from '../../../org/bukkit/inventory/meta/ItemMeta.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface ItemStack extends ConfigurationSerializable {
	removeEnchantment(ench: Enchantment): number;
	getItemMeta(): ItemMeta;
	setItemMeta(itemMeta: ItemMeta): boolean;
	getData(): MaterialData;
	serialize(): any;
	setDurability(durability: number): void;
	getAmount(): number;
	hasItemMeta(): boolean;
	setType(type: Material): void;
	setAmount(amount: number): void;
	getDurability(): number;
	setData(data: MaterialData): void;
	getMaxStackSize(): number;
	isSimilar(stack: ItemStack): boolean;
	containsEnchantment(ench: Enchantment): boolean;
	getEnchantmentLevel(ench: Enchantment): number;
	getEnchantments(): any;
	addEnchantments(enchantments: any): void;
	addEnchantment(ench: Enchantment, level: number): void;
	addUnsafeEnchantment(ench: Enchantment, level: number): void;
	addUnsafeEnchantments(enchantments: any): void;
	clone(): any;
	clone(): ItemStack;
	getType(): Material;
}

export default class ItemStack {
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

