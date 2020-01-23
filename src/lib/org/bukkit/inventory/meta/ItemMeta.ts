declare var Java: any;
import {Enchantment} from '../../../../org/bukkit/enchantments/Enchantment.js'
import {ItemFlag} from '../../../../org/bukkit/inventory/ItemFlag.js'
import {Attribute} from '../../../../org/bukkit/attribute/Attribute.js'
import {AttributeModifier} from '../../../../org/bukkit/attribute/AttributeModifier.js'
import {Multimap} from '../../../../com/google/common/collect/Multimap.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {CustomItemTagContainer} from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js'
import {PersistentDataContainer} from '../../../../org/bukkit/persistence/PersistentDataContainer.js'
import {ConfigurationSerializable} from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import {PersistentDataHolder} from '../../../../org/bukkit/persistence/PersistentDataHolder.js'

export interface ItemMeta extends ConfigurationSerializable, PersistentDataHolder {
	clone(): ItemMeta;
	clone(): any;
	getDisplayName(): string;
	isUnbreakable(): boolean;
	removeEnchant(ench: Enchantment): boolean;
	setDisplayName(_name: string): void;
	setVersion(version: number): void;
	setUnbreakable(unbreakable: boolean): void;
	getEnchants(): any;
	setLore(lore: any): void;
	hasEnchant(ench: Enchantment): boolean;
	addEnchant(ench: Enchantment, level: number, ignoreLevelRestriction: boolean): boolean;
	getLore(): any;
	getEnchantLevel(ench: Enchantment): number;
	hasLocalizedName(): boolean;
	hasDisplayName(): boolean;
	getLocalizedName(): string;
	setLocalizedName(_name: string): void;
	hasCustomModelData(): boolean;
	setCustomModelData(data: any): void;
	hasLore(): boolean;
	getCustomModelData(): number;
	hasEnchants(): boolean;
	addItemFlags(itemFlags: Array<ItemFlag>): void;
	removeItemFlags(itemFlags: Array<ItemFlag>): void;
	getItemFlags(): any;
	hasItemFlag(flag: ItemFlag): boolean;
	hasConflictingEnchant(ench: Enchantment): boolean;
	addAttributeModifier(attribute: Attribute, modifier: AttributeModifier): boolean;
	getAttributeModifiers(slot: EquipmentSlot): Multimap;
	getAttributeModifiers(): Multimap;
	getAttributeModifiers(attribute: Attribute): any;
	getCustomTagContainer(): CustomItemTagContainer;
	removeAttributeModifier(attribute: Attribute): boolean;
	removeAttributeModifier(attribute: Attribute, modifier: AttributeModifier): boolean;
	removeAttributeModifier(slot: EquipmentSlot): boolean;
	hasAttributeModifiers(): boolean;
	setAttributeModifiers(attributeModifiers: Multimap): void;
	serialize(): any;
	getPersistentDataContainer(): PersistentDataContainer;
}

export class ItemMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.ItemMeta');
	}
}

