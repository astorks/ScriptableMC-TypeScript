import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js';
import ItemMeta from '../../../org/bukkit/inventory/meta/ItemMeta.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface ItemStack extends ConfigurationSerializable {
    getAmount(): number;
    getData(): MaterialData;
    hasItemMeta(): boolean;
    getItemMeta(): ItemMeta;
    setType(type: Material): void;
    setAmount(amount: number): void;
    getDurability(): number;
    setData(data: MaterialData): void;
    setItemMeta(itemMeta: ItemMeta): boolean;
    getMaxStackSize(): number;
    isSimilar(stack: ItemStack): boolean;
    containsEnchantment(ench: Enchantment): boolean;
    getEnchantmentLevel(ench: Enchantment): number;
    getEnchantments(): any;
    addEnchantments(enchantments: any): void;
    addEnchantment(ench: Enchantment, level: number): void;
    addUnsafeEnchantment(ench: Enchantment, level: number): void;
    addUnsafeEnchantments(enchantments: any): void;
    removeEnchantment(ench: Enchantment): number;
    serialize(): any;
    setDurability(durability: number): void;
    clone(): any;
    clone(): ItemStack;
    getType(): Material;
}
export default class ItemStack {
    static get $javaClass(): any;
    constructor(type: Material, amount: number, damage: number);
    constructor(type: Material, amount: number);
    constructor(type: Material, amount: number, damage: number, data: number);
    constructor(type: Material);
    constructor(stack: ItemStack);
    static deserialize(args: any): ItemStack;
}
