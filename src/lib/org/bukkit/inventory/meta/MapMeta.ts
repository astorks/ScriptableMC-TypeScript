declare var Java: any;
import Attribute from '../../../../org/bukkit/attribute/Attribute.js'
import AttributeModifier from '../../../../org/bukkit/attribute/AttributeModifier.js'
import Color from '../../../../org/bukkit/Color.js'
import CustomItemTagContainer from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js'
import Enchantment from '../../../../org/bukkit/enchantments/Enchantment.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import ItemFlag from '../../../../org/bukkit/inventory/ItemFlag.js'
import ItemMeta from '../../../../org/bukkit/inventory/meta/ItemMeta.js'
import MapView from '../../../../org/bukkit/map/MapView.js'
import Multimap from '../../../../com/google/common/collect/Multimap.js'
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js'

export default interface MapMeta extends ItemMeta {
	addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean;
	addItemFlags(arg0: Array<ItemFlag>): void;
	clone(): MapMeta;
	clone(): any;
	clone(): ItemMeta;
	getAttributeModifiers(): Multimap;
	getAttributeModifiers(arg0: EquipmentSlot): Multimap;
	getAttributeModifiers(arg0: Attribute): any;
	getColor(): Color;
	getCustomModelData(): number;
	getCustomTagContainer(): CustomItemTagContainer;
	getDisplayName(): string;
	getEnchantLevel(arg0: Enchantment): number;
	getEnchants(): any;
	getItemFlags(): any;
	getLocalizedName(): string;
	getLocationName(): string;
	getLore(): Array<string>;
	getMapId(): number;
	getMapView(): MapView;
	getPersistentDataContainer(): PersistentDataContainer;
	hasAttributeModifiers(): boolean;
	hasColor(): boolean;
	hasConflictingEnchant(arg0: Enchantment): boolean;
	hasCustomModelData(): boolean;
	hasDisplayName(): boolean;
	hasEnchant(arg0: Enchantment): boolean;
	hasEnchants(): boolean;
	hasItemFlag(arg0: ItemFlag): boolean;
	hasLocalizedName(): boolean;
	hasLocationName(): boolean;
	hasLore(): boolean;
	hasMapId(): boolean;
	hasMapView(): boolean;
	isScaling(): boolean;
	isUnbreakable(): boolean;
	removeAttributeModifier(arg0: Attribute): boolean;
	removeAttributeModifier(arg0: EquipmentSlot): boolean;
	removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	removeEnchant(arg0: Enchantment): boolean;
	removeItemFlags(arg0: Array<ItemFlag>): void;
	serialize(): any;
	setAttributeModifiers(arg0: Multimap): void;
	setColor(arg0: Color): void;
	setCustomModelData(arg0: any): void;
	setDisplayName(arg0: string): void;
	setLocalizedName(arg0: string): void;
	setLocationName(arg0: string): void;
	setLore(arg0: Array<any>): void;
	setMapId(arg0: number): void;
	setMapView(arg0: MapView): void;
	setScaling(arg0: boolean): void;
	setUnbreakable(arg0: boolean): void;
	setVersion(arg0: number): void;
}

export default class MapMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.MapMeta');
	}

}

