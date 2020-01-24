declare var Java: any;
import {ItemMeta} from '../../../../org/bukkit/inventory/meta/ItemMeta.js'
import {FireworkEffect} from '../../../../org/bukkit/FireworkEffect.js'
import {Enchantment} from '../../../../org/bukkit/enchantments/Enchantment.js'
import {ItemFlag} from '../../../../org/bukkit/inventory/ItemFlag.js'
import {Attribute} from '../../../../org/bukkit/attribute/Attribute.js'
import {AttributeModifier} from '../../../../org/bukkit/attribute/AttributeModifier.js'
import {Multimap} from '../../../../com/google/common/collect/Multimap.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {CustomItemTagContainer} from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js'
import {PersistentDataContainer} from '../../../../org/bukkit/persistence/PersistentDataContainer.js'

export interface FireworkMeta extends ItemMeta {
	clone(): FireworkMeta;
	clone(): ItemMeta;
	clone(): any;
	getPower(): number;
	setPower(power: number): void;
	addEffect(effect: FireworkEffect): void;
	addEffects(effects: any): void;
	addEffects(effects: Array<FireworkEffect>): void;
	removeEffect(index: number): void;
	getEffects(): any;
	hasEffects(): boolean;
	getEffectsSize(): number;
	clearEffects(): void;
	getDisplayName(): string;
	setDisplayName(_name: string): void;
	setUnbreakable(unbreakable: boolean): void;
	removeEnchant(ench: Enchantment): boolean;
	setLore(lore: any): void;
	isUnbreakable(): boolean;
	setVersion(version: number): void;
	addEnchant(ench: Enchantment, level: number, ignoreLevelRestriction: boolean): boolean;
	getEnchantLevel(ench: Enchantment): number;
	hasEnchant(ench: Enchantment): boolean;
	getEnchants(): any;
	getLore(): any;
	hasItemFlag(flag: ItemFlag): boolean;
	addItemFlags(itemFlags: Array<ItemFlag>): void;
	getItemFlags(): any;
	setCustomModelData(data: any): void;
	setLocalizedName(_name: string): void;
	hasLore(): boolean;
	getLocalizedName(): string;
	hasDisplayName(): boolean;
	hasLocalizedName(): boolean;
	hasCustomModelData(): boolean;
	getCustomModelData(): number;
	hasEnchants(): boolean;
	removeItemFlags(itemFlags: Array<ItemFlag>): void;
	addAttributeModifier(attribute: Attribute, modifier: AttributeModifier): boolean;
	hasConflictingEnchant(ench: Enchantment): boolean;
	hasAttributeModifiers(): boolean;
	getAttributeModifiers(slot: EquipmentSlot): Multimap;
	getAttributeModifiers(attribute: Attribute): any;
	getAttributeModifiers(): Multimap;
	getCustomTagContainer(): CustomItemTagContainer;
	setAttributeModifiers(attributeModifiers: Multimap): void;
	removeAttributeModifier(slot: EquipmentSlot): boolean;
	removeAttributeModifier(attribute: Attribute): boolean;
	removeAttributeModifier(attribute: Attribute, modifier: AttributeModifier): boolean;
	serialize(): any;
	getPersistentDataContainer(): PersistentDataContainer;
}

export class FireworkMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.FireworkMeta');
	}
}

