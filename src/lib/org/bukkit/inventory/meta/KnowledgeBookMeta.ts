declare var Java: any;
import Attribute from '../../../../org/bukkit/attribute/Attribute.js'
import AttributeModifier from '../../../../org/bukkit/attribute/AttributeModifier.js'
import CustomItemTagContainer from './tags/CustomItemTagContainer.js'
import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import ItemFlag from '../../../../org/bukkit/inventory/ItemFlag.js'
import ItemMeta from './ItemMeta.js'
import Multimap from '../../../../com/google/common/collect/Multimap.js'
import NamespacedKey from '../../../../org/bukkit/NamespacedKey.js'
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js'

export default interface KnowledgeBookMeta extends ItemMeta {
	addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean;
	addItemFlags(arg0: Array<ItemFlag>): void;
	addRecipe(arg0: Array<NamespacedKey>): void;
	clone(): any;
	clone(): KnowledgeBookMeta;
	clone(): ItemMeta;
	getAttributeModifiers(): Multimap;
	getAttributeModifiers(arg0: Attribute): Array<AttributeModifier>;
	getAttributeModifiers(arg0: EquipmentSlot): Multimap;
	getCustomModelData(): number;
	getCustomTagContainer(): CustomItemTagContainer;
	getDisplayName(): string;
	getEnchantLevel(arg0: Enchantment): number;
	getEnchants(): any;
	getItemFlags(): any;
	getLocalizedName(): string;
	getLore(): Array<string>;
	getPersistentDataContainer(): PersistentDataContainer;
	getRecipes(): Array<NamespacedKey>;
	hasAttributeModifiers(): boolean;
	hasConflictingEnchant(arg0: Enchantment): boolean;
	hasCustomModelData(): boolean;
	hasDisplayName(): boolean;
	hasEnchant(arg0: Enchantment): boolean;
	hasEnchants(): boolean;
	hasItemFlag(arg0: ItemFlag): boolean;
	hasLocalizedName(): boolean;
	hasLore(): boolean;
	hasRecipes(): boolean;
	isUnbreakable(): boolean;
	removeAttributeModifier(arg0: Attribute): boolean;
	removeAttributeModifier(arg0: EquipmentSlot): boolean;
	removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	removeEnchant(arg0: Enchantment): boolean;
	removeItemFlags(arg0: Array<ItemFlag>): void;
	serialize(): any;
	setAttributeModifiers(arg0: Multimap): void;
	setCustomModelData(arg0: any): void;
	setDisplayName(arg0: string): void;
	setLocalizedName(arg0: string): void;
	setLore(arg0: Array<any>): void;
	setRecipes(arg0: Array<any>): void;
	setUnbreakable(arg0: boolean): void;
	setVersion(arg0: number): void;
}

export default class KnowledgeBookMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.KnowledgeBookMeta');
	}

}

