declare var Java: any;
import Attribute from '../../../../org/bukkit/attribute/Attribute.js'
import AttributeModifier from '../../../../org/bukkit/attribute/AttributeModifier.js'
import CustomItemTagContainer from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js'
import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import ItemFlag from '../../../../org/bukkit/inventory/ItemFlag.js'
import ItemMeta from '../../../../org/bukkit/inventory/meta/ItemMeta.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Multimap from '../../../../com/google/common/collect/Multimap.js'
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js'

export default interface CrossbowMeta extends ItemMeta {
	hasChargedProjectiles(): boolean;
	getChargedProjectiles(): Array<ItemStack>;
	setChargedProjectiles(arg0: Array<any>): void;
	addChargedProjectile(arg0: ItemStack): void;
	getLore(): Array<string>;
	isUnbreakable(): boolean;
	setUnbreakable(arg0: boolean): void;
	addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean;
	removeEnchant(arg0: Enchantment): boolean;
	setLore(arg0: Array<any>): void;
	setDisplayName(arg0: string): void;
	hasEnchant(arg0: Enchantment): boolean;
	getEnchantLevel(arg0: Enchantment): number;
	getEnchants(): any;
	setVersion(arg0: number): void;
	setLocalizedName(arg0: string): void;
	hasLore(): boolean;
	hasCustomModelData(): boolean;
	getCustomModelData(): number;
	setCustomModelData(arg0: any): void;
	hasEnchants(): boolean;
	hasConflictingEnchant(arg0: Enchantment): boolean;
	addItemFlags(arg0: Array<ItemFlag>): void;
	removeItemFlags(arg0: Array<ItemFlag>): void;
	getItemFlags(): any;
	hasItemFlag(arg0: ItemFlag): boolean;
	hasAttributeModifiers(): boolean;
	getAttributeModifiers(arg0: EquipmentSlot): Multimap;
	getAttributeModifiers(): Multimap;
	getAttributeModifiers(arg0: Attribute): any;
	addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	setAttributeModifiers(arg0: Multimap): void;
	removeAttributeModifier(arg0: Attribute): boolean;
	removeAttributeModifier(arg0: EquipmentSlot): boolean;
	removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	getCustomTagContainer(): CustomItemTagContainer;
	hasLocalizedName(): boolean;
	hasDisplayName(): boolean;
	getLocalizedName(): string;
	clone(): ItemMeta;
	clone(): any;
	getDisplayName(): string;
	serialize(): any;
	getPersistentDataContainer(): PersistentDataContainer;
}

export default class CrossbowMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.CrossbowMeta');
	}
}

