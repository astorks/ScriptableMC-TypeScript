import Attribute from '../../../../org/bukkit/attribute/Attribute.js';
import AttributeModifier from '../../../../org/bukkit/attribute/AttributeModifier.js';
import ConfigurationSerializable from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import CustomItemTagContainer from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js';
import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js';
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import ItemFlag from '../../../../org/bukkit/inventory/ItemFlag.js';
import Multimap from '../../../../com/google/common/collect/Multimap.js';
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js';
import PersistentDataHolder from '../../../../org/bukkit/persistence/PersistentDataHolder.js';
export default interface ItemMeta extends ConfigurationSerializable, PersistentDataHolder {
    hasEnchant(arg0: Enchantment): boolean;
    getEnchantLevel(arg0: Enchantment): number;
    getEnchants(): any;
    addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean;
    removeEnchant(arg0: Enchantment): boolean;
    setVersion(arg0: number): void;
    setUnbreakable(arg0: boolean): void;
    setDisplayName(arg0: string): void;
    setLore(arg0: Array<any>): void;
    isUnbreakable(): boolean;
    getLore(): Array<string>;
    hasCustomModelData(): boolean;
    hasDisplayName(): boolean;
    hasLocalizedName(): boolean;
    getLocalizedName(): string;
    setLocalizedName(arg0: string): void;
    hasLore(): boolean;
    getCustomModelData(): number;
    setCustomModelData(arg0: any): void;
    hasEnchants(): boolean;
    hasConflictingEnchant(arg0: Enchantment): boolean;
    addItemFlags(arg0: Array<ItemFlag>): void;
    removeItemFlags(arg0: Array<ItemFlag>): void;
    getItemFlags(): any;
    hasItemFlag(arg0: ItemFlag): boolean;
    hasAttributeModifiers(): boolean;
    getAttributeModifiers(arg0: Attribute): any;
    getAttributeModifiers(arg0: EquipmentSlot): Multimap;
    getAttributeModifiers(): Multimap;
    addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
    setAttributeModifiers(arg0: Multimap): void;
    removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
    removeAttributeModifier(arg0: EquipmentSlot): boolean;
    removeAttributeModifier(arg0: Attribute): boolean;
    getCustomTagContainer(): CustomItemTagContainer;
    clone(): ItemMeta;
    clone(): any;
    getDisplayName(): string;
    serialize(): any;
    getPersistentDataContainer(): PersistentDataContainer;
}
export default class ItemMeta {
    static get $javaClass(): any;
}
