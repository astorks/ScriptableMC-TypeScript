declare var Java: any;
import Attribute from '../../../../org/bukkit/attribute/Attribute.js'
import AttributeModifier from '../../../../org/bukkit/attribute/AttributeModifier.js'
import BookMeta$Generation from '../../../../org/bukkit/inventory/meta/BookMeta$Generation.js'
import CustomItemTagContainer from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js'
import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import ItemFlag from '../../../../org/bukkit/inventory/ItemFlag.js'
import ItemMeta from '../../../../org/bukkit/inventory/meta/ItemMeta.js'
import Multimap from '../../../../com/google/common/collect/Multimap.js'
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js'

export default interface BookMeta extends ItemMeta {
	addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean;
	addItemFlags(arg0: Array<ItemFlag>): void;
	addPage(arg0: Array<string>): void;
	clone(): ItemMeta;
	clone(): BookMeta;
	clone(): any;
	getAttributeModifiers(): Multimap;
	getAttributeModifiers(arg0: EquipmentSlot): Multimap;
	getAttributeModifiers(arg0: Attribute): any;
	getAuthor(): string;
	getCustomModelData(): number;
	getCustomTagContainer(): CustomItemTagContainer;
	getDisplayName(): string;
	getEnchantLevel(arg0: Enchantment): number;
	getEnchants(): any;
	getGeneration(): BookMeta$Generation;
	getItemFlags(): any;
	getLocalizedName(): string;
	getLore(): Array<string>;
	getPage(arg0: number): string;
	getPageCount(): number;
	getPages(): Array<string>;
	getPersistentDataContainer(): PersistentDataContainer;
	getTitle(): string;
	hasAttributeModifiers(): boolean;
	hasAuthor(): boolean;
	hasConflictingEnchant(arg0: Enchantment): boolean;
	hasCustomModelData(): boolean;
	hasDisplayName(): boolean;
	hasEnchant(arg0: Enchantment): boolean;
	hasEnchants(): boolean;
	hasGeneration(): boolean;
	hasItemFlag(arg0: ItemFlag): boolean;
	hasLocalizedName(): boolean;
	hasLore(): boolean;
	hasPages(): boolean;
	hasTitle(): boolean;
	isUnbreakable(): boolean;
	removeAttributeModifier(arg0: Attribute): boolean;
	removeAttributeModifier(arg0: EquipmentSlot): boolean;
	removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	removeEnchant(arg0: Enchantment): boolean;
	removeItemFlags(arg0: Array<ItemFlag>): void;
	serialize(): any;
	setAttributeModifiers(arg0: Multimap): void;
	setAuthor(arg0: string): void;
	setCustomModelData(arg0: any): void;
	setDisplayName(arg0: string): void;
	setGeneration(arg0: BookMeta$Generation): void;
	setLocalizedName(arg0: string): void;
	setLore(arg0: Array<any>): void;
	setPage(arg0: number, arg1: string): void;
	setPages(arg0: Array<string>): void;
	setPages(arg0: Array<any>): void;
	setTitle(arg0: string): boolean;
	setUnbreakable(arg0: boolean): void;
	setVersion(arg0: number): void;
}

export default class BookMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.BookMeta');
	}

}

