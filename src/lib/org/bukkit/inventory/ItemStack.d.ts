import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js';
import ItemMeta from '../../../org/bukkit/inventory/meta/ItemMeta.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface ItemStack extends ConfigurationSerializable {
    clone(): any;
    clone(): ItemStack;
    getType(): Material;
    getItemMeta(): ItemMeta;
    removeEnchantment(ench: Enchantment): number;
    setItemMeta(itemMeta: ItemMeta): boolean;
    serialize(): any;
    containsEnchantment(ench: Enchantment): boolean;
    getEnchantmentLevel(ench: Enchantment): number;
    addUnsafeEnchantment(ench: Enchantment, level: number): void;
    addUnsafeEnchantments(enchantments: any): void;
    setData(data: MaterialData): void;
    setDurability(durability: number): void;
    getAmount(): number;
    addEnchantments(enchantments: any): void;
    isSimilar(stack: ItemStack): boolean;
    getMaxStackSize(): number;
    addEnchantment(ench: Enchantment, level: number): void;
    getData(): MaterialData;
    hasItemMeta(): boolean;
    setType(type: Material): void;
    setAmount(amount: number): void;
    getEnchantments(): any;
    getDurability(): number;
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
