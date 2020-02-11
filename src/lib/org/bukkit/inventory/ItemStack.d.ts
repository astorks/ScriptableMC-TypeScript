import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js';
import ItemMeta from '../../../org/bukkit/inventory/meta/ItemMeta.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface ItemStack extends ConfigurationSerializable {
    clone(): any;
    clone(): ItemStack;
    getType(): Material;
    setAmount(amount: number): void;
    setData(data: MaterialData): void;
    getItemMeta(): ItemMeta;
    setItemMeta(itemMeta: ItemMeta): boolean;
    setType(type: Material): void;
    getDurability(): number;
    getAmount(): number;
    getData(): MaterialData;
    hasItemMeta(): boolean;
    setDurability(durability: number): void;
    getMaxStackSize(): number;
    getEnchantments(): any;
    isSimilar(stack: ItemStack): boolean;
    addEnchantments(enchantments: any): void;
    containsEnchantment(ench: Enchantment): boolean;
    addUnsafeEnchantment(ench: Enchantment, level: number): void;
    addUnsafeEnchantments(enchantments: any): void;
    getEnchantmentLevel(ench: Enchantment): number;
    removeEnchantment(ench: Enchantment): number;
    serialize(): any;
    addEnchantment(ench: Enchantment, level: number): void;
}
export default class ItemStack {
    static get $javaClass(): any;
    constructor(stack: ItemStack);
    constructor(type: Material, amount: number, damage: number, data: number);
    constructor(type: Material, amount: number, damage: number);
    constructor(type: Material);
    constructor(type: Material, amount: number);
    static deserialize(args: any): ItemStack;
}
