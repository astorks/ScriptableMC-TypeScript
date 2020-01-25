declare var Java: any;
import {FireworkEffect} from '../../../../org/bukkit/FireworkEffect.js'
import {ItemMeta} from '../../../../org/bukkit/inventory/meta/ItemMeta.js'
import {Enchantment} from '../../../../org/bukkit/enchantments/Enchantment.js'
import {ItemFlag} from '../../../../org/bukkit/inventory/ItemFlag.js'
import {Multimap} from '../../../../com/google/common/collect/Multimap.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {Attribute} from '../../../../org/bukkit/attribute/Attribute.js'
import {AttributeModifier} from '../../../../org/bukkit/attribute/AttributeModifier.js'
import {CustomItemTagContainer} from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js'
import {PersistentDataContainer} from '../../../../org/bukkit/persistence/PersistentDataContainer.js'

export interface FireworkMeta extends ItemMeta {
	setPower(arg0: number): void;
	getPower(): number;
	addEffect(arg0: FireworkEffect): void;
	addEffects(arg0: any): void;
	addEffects(arg0: Array<FireworkEffect>): void;
	getEffects(): any;
	getEffectsSize(): number;
	removeEffect(arg0: number): void;
	clearEffects(): void;
	hasEffects(): boolean;
	clone(): ItemMeta;
	clone(): any;
	clone(): FireworkMeta;
	hasEnchant(arg0: Enchantment): boolean;
	getEnchantLevel(arg0: Enchantment): number;
	getEnchants(): any;
	isUnbreakable(): boolean;
	addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean;
	removeEnchant(arg0: Enchantment): boolean;
	setVersion(arg0: number): void;
	getLore(): any;
	setLore(arg0: any): void;
	setUnbreakable(arg0: boolean): void;
	setDisplayName(arg0: string): void;
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
	getAttributeModifiers(): Multimap;
	getAttributeModifiers(arg0: EquipmentSlot): Multimap;
	getAttributeModifiers(arg0: Attribute): any;
	addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	setAttributeModifiers(arg0: Multimap): void;
	removeAttributeModifier(arg0: EquipmentSlot): boolean;
	removeAttributeModifier(arg0: Attribute): boolean;
	removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	getCustomTagContainer(): CustomItemTagContainer;
	hasCustomModelData(): boolean;
	getDisplayName(): string;
	serialize(): any;
	getPersistentDataContainer(): PersistentDataContainer;
}

export class FireworkMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.FireworkMeta');
	}
}

