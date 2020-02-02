import Attribute from '../../../../org/bukkit/attribute/Attribute.js';
import AttributeModifier from '../../../../org/bukkit/attribute/AttributeModifier.js';
import CustomItemTagContainer from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js';
import DyeColor from '../../../../org/bukkit/DyeColor.js';
import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js';
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import ItemFlag from '../../../../org/bukkit/inventory/ItemFlag.js';
import ItemMeta from '../../../../org/bukkit/inventory/meta/ItemMeta.js';
import Multimap from '../../../../com/google/common/collect/Multimap.js';
import Pattern from '../../../../org/bukkit/block/banner/Pattern.js';
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js';
export default interface BannerMeta extends ItemMeta {
    getPattern(arg0: number): Pattern;
    getPatterns(): any;
    addPattern(arg0: Pattern): void;
    numberOfPatterns(): number;
    setPatterns(arg0: any): void;
    getBaseColor(): DyeColor;
    setBaseColor(arg0: DyeColor): void;
    setPattern(arg0: number, arg1: Pattern): void;
    removePattern(arg0: number): Pattern;
    clone(): any;
    clone(): ItemMeta;
    getDisplayName(): string;
    setDisplayName(arg0: string): void;
    getEnchants(): any;
    setLore(arg0: any): void;
    setUnbreakable(arg0: boolean): void;
    getEnchantLevel(arg0: Enchantment): number;
    hasEnchant(arg0: Enchantment): boolean;
    addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean;
    getLore(): any;
    isUnbreakable(): boolean;
    setVersion(arg0: number): void;
    removeEnchant(arg0: Enchantment): boolean;
    hasDisplayName(): boolean;
    hasLore(): boolean;
    hasEnchants(): boolean;
    getItemFlags(): any;
    hasItemFlag(arg0: ItemFlag): boolean;
    addItemFlags(arg0: Array<ItemFlag>): void;
    removeItemFlags(arg0: Array<ItemFlag>): void;
    getLocalizedName(): string;
    hasLocalizedName(): boolean;
    setLocalizedName(arg0: string): void;
    hasCustomModelData(): boolean;
    getCustomModelData(): number;
    setCustomModelData(arg0: any): void;
    setAttributeModifiers(arg0: Multimap): void;
    getAttributeModifiers(): Multimap;
    getAttributeModifiers(arg0: Attribute): any;
    getAttributeModifiers(arg0: EquipmentSlot): Multimap;
    removeAttributeModifier(arg0: EquipmentSlot): boolean;
    removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
    removeAttributeModifier(arg0: Attribute): boolean;
    hasConflictingEnchant(arg0: Enchantment): boolean;
    getCustomTagContainer(): CustomItemTagContainer;
    addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
    hasAttributeModifiers(): boolean;
    serialize(): any;
    getPersistentDataContainer(): PersistentDataContainer;
}
export default class BannerMeta {
    static get $javaClass(): any;
}
