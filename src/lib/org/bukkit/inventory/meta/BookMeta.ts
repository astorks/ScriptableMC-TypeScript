declare var Java: any;
import {BookMeta$Generation} from '../../../../org/bukkit/inventory/meta/BookMeta$Generation.js'
import {ItemMeta} from '../../../../org/bukkit/inventory/meta/ItemMeta.js'
import {Enchantment} from '../../../../org/bukkit/enchantments/Enchantment.js'
import {ItemFlag} from '../../../../org/bukkit/inventory/ItemFlag.js'
import {Multimap} from '../../../../com/google/common/collect/Multimap.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {Attribute} from '../../../../org/bukkit/attribute/Attribute.js'
import {AttributeModifier} from '../../../../org/bukkit/attribute/AttributeModifier.js'
import {CustomItemTagContainer} from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js'
import {PersistentDataContainer} from '../../../../org/bukkit/persistence/PersistentDataContainer.js'

export interface BookMeta extends ItemMeta {
	getTitle(): string;
	setTitle(arg0: string): boolean;
	getPage(arg0: number): string;
	hasTitle(): boolean;
	hasAuthor(): boolean;
	getAuthor(): string;
	setAuthor(arg0: string): void;
	hasGeneration(): boolean;
	getGeneration(): BookMeta$Generation;
	setGeneration(arg0: BookMeta$Generation): void;
	hasPages(): boolean;
	setPage(arg0: number, arg1: string): void;
	getPages(): any;
	setPages(arg0: Array<string>): void;
	setPages(arg0: any): void;
	addPage(arg0: Array<string>): void;
	getPageCount(): number;
	clone(): any;
	clone(): ItemMeta;
	clone(): BookMeta;
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

export class BookMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.BookMeta');
	}
}

