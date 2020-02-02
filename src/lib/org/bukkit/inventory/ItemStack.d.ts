import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js';
import ItemMeta from '../../../org/bukkit/inventory/meta/ItemMeta.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface ItemStack extends ConfigurationSerializable {
    clone(): any;
    clone(): ItemStack;
    getType(): Material;
    serialize(): any;
    addUnsafeEnchantment(ench: Enchantment, level: number): void;
    containsEnchantment(ench: Enchantment): boolean;
    getEnchantmentLevel(ench: Enchantment): number;
    addUnsafeEnchantments(enchantments: any): void;
    hasItemMeta(): boolean;
    getData(): MaterialData;
    setType(type: Material): void;
    setAmount(amount: number): void;
    getItemMeta(): ItemMeta;
    getDurability(): number;
    getAmount(): number;
    setData(data: MaterialData): void;
    setItemMeta(itemMeta: ItemMeta): boolean;
    getMaxStackSize(): number;
    setDurability(durability: number): void;
    addEnchantments(enchantments: any): void;
    addEnchantment(ench: Enchantment, level: number): void;
    isSimilar(stack: ItemStack): boolean;
    removeEnchantment(ench: Enchantment): number;
    getEnchantments(): any;
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
