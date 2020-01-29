import { Material } from '../../../org/bukkit/Material.js';
import { Enchantment } from '../../../org/bukkit/enchantments/Enchantment.js';
import { MaterialData } from '../../../org/bukkit/material/MaterialData.js';
import { ItemMeta } from '../../../org/bukkit/inventory/meta/ItemMeta.js';
import { ConfigurationSerializable } from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
export interface ItemStack extends ConfigurationSerializable {
    clone(): any;
    clone(): ItemStack;
    getType(): Material;
    addUnsafeEnchantments(enchantments: any): void;
    containsEnchantment(ench: Enchantment): boolean;
    getEnchantmentLevel(ench: Enchantment): number;
    addUnsafeEnchantment(ench: Enchantment, level: number): void;
    serialize(): any;
    addEnchantments(enchantments: any): void;
    isSimilar(stack: ItemStack): boolean;
    getEnchantments(): any;
    addEnchantment(ench: Enchantment, level: number): void;
    getData(): MaterialData;
    getDurability(): number;
    setData(data: MaterialData): void;
    getAmount(): number;
    hasItemMeta(): boolean;
    getMaxStackSize(): number;
    setType(type: Material): void;
    setItemMeta(itemMeta: ItemMeta): boolean;
    setAmount(amount: number): void;
    setDurability(durability: number): void;
    getItemMeta(): ItemMeta;
    removeEnchantment(ench: Enchantment): number;
}
export declare class ItemStack {
    static get $javaClass(): any;
    constructor(stack: ItemStack);
    constructor(type: Material, amount: number, damage: number, data: number);
    constructor(type: Material, amount: number, damage: number);
    constructor(type: Material);
    constructor(type: Material, amount: number);
    static deserialize(args: any): ItemStack;
}
