import { Enchantment } from '../../../org/bukkit/enchantments/Enchantment.js';
import { MaterialData } from '../../../org/bukkit/material/MaterialData.js';
import { ItemMeta } from '../../../org/bukkit/inventory/meta/ItemMeta.js';
import { Material } from '../../../org/bukkit/Material.js';
import { ConfigurationSerializable } from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
export interface ItemStack extends ConfigurationSerializable {
    getEnchantments(): any;
    addEnchantments(enchantments: any): void;
    addEnchantment(ench: Enchantment, level: number): void;
    addUnsafeEnchantment(ench: Enchantment, level: number): void;
    addUnsafeEnchantments(enchantments: any): void;
    removeEnchantment(ench: Enchantment): number;
    serialize(): any;
    setDurability(durability: number): void;
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
    clone(): any;
    clone(): ItemStack;
    getType(): Material;
}
export declare class ItemStack {
    static get $javaClass(): any;
    constructor(type: Material, amount: number, damage: number);
    constructor(type: Material, amount: number);
    constructor(type: Material, amount: number, damage: number, data: number);
    constructor(type: Material);
    constructor(stack: ItemStack);
    static deserialize(args: any): ItemStack;
}
