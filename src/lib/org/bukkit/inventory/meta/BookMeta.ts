declare var Java: any;
import {ItemMeta} from '../../../../org/bukkit/inventory/meta/ItemMeta.js'
import {BookMeta$Generation} from '../../../../org/bukkit/inventory/meta/BookMeta$Generation.js'
import {Enchantment} from '../../../../org/bukkit/enchantments/Enchantment.js'
import {ItemFlag} from '../../../../org/bukkit/inventory/ItemFlag.js'
import {Attribute} from '../../../../org/bukkit/attribute/Attribute.js'
import {AttributeModifier} from '../../../../org/bukkit/attribute/AttributeModifier.js'
import {Multimap} from '../../../../com/google/common/collect/Multimap.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {CustomItemTagContainer} from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js'
import {PersistentDataContainer} from '../../../../org/bukkit/persistence/PersistentDataContainer.js'

export interface BookMeta extends ItemMeta {
	clone(): BookMeta;
	clone(): ItemMeta;
	clone(): any;
	getTitle(): string;
	setTitle(title: string): boolean;
	getPage(page: number): string;
	hasTitle(): boolean;
	hasAuthor(): boolean;
	getAuthor(): string;
	addPage(pages: Array<string>): void;
	setPage(page: number, data: string): void;
	getPages(): any;
	getGeneration(): BookMeta$Generation;
	hasPages(): boolean;
	setAuthor(author: string): void;
	setPages(pages: any): void;
	setPages(pages: Array<string>): void;
	setGeneration(generation: BookMeta$Generation): void;
	getPageCount(): number;
	hasGeneration(): boolean;
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

export class BookMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.BookMeta');
	}
}

