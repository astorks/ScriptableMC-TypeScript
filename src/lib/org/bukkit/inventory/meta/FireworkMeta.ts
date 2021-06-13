declare var Java: any;
import Attribute from '../../../../org/bukkit/attribute/Attribute.js'
import AttributeModifier from '../../../../org/bukkit/attribute/AttributeModifier.js'
import CustomItemTagContainer from './tags/CustomItemTagContainer.js'
import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import FireworkEffect from '../../../../org/bukkit/FireworkEffect.js'
import ItemFlag from '../../../../org/bukkit/inventory/ItemFlag.js'
import ItemMeta from './ItemMeta.js'
import Multimap from '../../../../com/google/common/collect/Multimap.js'
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js'

export default interface FireworkMeta extends ItemMeta {
	addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	addEffect(arg0: FireworkEffect): void;
	addEffects(arg0: Array<FireworkEffect>): void;
	addEffects(arg0: any): void;
	addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean;
	addItemFlags(arg0: Array<ItemFlag>): void;
	clearEffects(): void;
	clone(): FireworkMeta;
	clone(): ItemMeta;
	clone(): any;
	getAttributeModifiers(): Multimap;
	getAttributeModifiers(arg0: EquipmentSlot): Multimap;
	getAttributeModifiers(arg0: Attribute): Array<AttributeModifier>;
	getCustomModelData(): number;
	getCustomTagContainer(): CustomItemTagContainer;
	getDisplayName(): string;
	getEffects(): Array<FireworkEffect>;
	getEffectsSize(): number;
	getEnchantLevel(arg0: Enchantment): number;
	getEnchants(): any;
	getItemFlags(): any;
	getLocalizedName(): string;
	getLore(): Array<string>;
	getPersistentDataContainer(): PersistentDataContainer;
	getPower(): number;
	hasAttributeModifiers(): boolean;
	hasConflictingEnchant(arg0: Enchantment): boolean;
	hasCustomModelData(): boolean;
	hasDisplayName(): boolean;
	hasEffects(): boolean;
	hasEnchant(arg0: Enchantment): boolean;
	hasEnchants(): boolean;
	hasItemFlag(arg0: ItemFlag): boolean;
	hasLocalizedName(): boolean;
	hasLore(): boolean;
	isUnbreakable(): boolean;
	removeAttributeModifier(arg0: Attribute): boolean;
	removeAttributeModifier(arg0: EquipmentSlot): boolean;
	removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	removeEffect(arg0: number): void;
	removeEnchant(arg0: Enchantment): boolean;
	removeItemFlags(arg0: Array<ItemFlag>): void;
	serialize(): any;
	setAttributeModifiers(arg0: Multimap): void;
	setCustomModelData(arg0: any): void;
	setDisplayName(arg0: string): void;
	setLocalizedName(arg0: string): void;
	setLore(arg0: Array<any>): void;
	setPower(arg0: number): void;
	setUnbreakable(arg0: boolean): void;
	setVersion(arg0: number): void;
}

export default class FireworkMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.FireworkMeta');
	}

}

