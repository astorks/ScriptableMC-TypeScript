declare var Java: any;
import {ConfigurationSection} from '../../../org/bukkit/configuration/ConfigurationSection.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Configuration} from '../../../org/bukkit/configuration/Configuration.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {Color} from '../../../org/bukkit/Color.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'

export interface MemorySection extends ConfigurationSection {
	get(path: string): any;
	get(path: string, def: any): any;
	getObject(path: string, clazz: any): any;
	getObject(path: string, clazz: any, def: any): any;
	getBoolean(path: string, def: boolean): boolean;
	getBoolean(path: string): boolean;
	getInt(path: string, def: number): number;
	getInt(path: string): number;
	getLong(path: string, def: number): number;
	getLong(path: string): number;
	getDouble(path: string): number;
	getDouble(path: string, def: number): number;
	getName(): string;
	contains(path: string, ignoreDefault: boolean): boolean;
	contains(path: string): boolean;
	getParent(): ConfigurationSection;
	set(path: string, value: any): void;
	getLocation(path: string): Location;
	getLocation(path: string, def: Location): Location;
	isSet(path: string): boolean;
	getRoot(): Configuration;
	getString(path: string, def: string): string;
	getString(path: string): string;
	getKeys(deep: boolean): any;
	getOfflinePlayer(path: string, def: OfflinePlayer): OfflinePlayer;
	getOfflinePlayer(path: string): OfflinePlayer;
	isString(path: string): boolean;
	isBoolean(path: string): boolean;
	isConfigurationSection(path: string): boolean;
	getConfigurationSection(path: string): ConfigurationSection;
	addDefault(path: string, value: any): void;
	getValues(deep: boolean): any;
	getColor(path: string): Color;
	getColor(path: string, def: Color): Color;
	createSection(path: string, map: any): ConfigurationSection;
	createSection(path: string): ConfigurationSection;
	getIntegerList(path: string): any;
	getDoubleList(path: string): any;
	getShortList(path: string): any;
	isColor(path: string): boolean;
	isList(path: string): boolean;
	getSerializable(path: string, clazz: any): ConfigurationSerializable;
	getSerializable(path: string, clazz: any, def: ConfigurationSerializable): ConfigurationSerializable;
	getFloatList(path: string): any;
	getLongList(path: string): any;
	isDouble(path: string): boolean;
	getByteList(path: string): any;
	isLocation(path: string): boolean;
	getList(path: string, def: any): any;
	getList(path: string): any;
	getBooleanList(path: string): any;
	getCharacterList(path: string): any;
	isInt(path: string): boolean;
	isVector(path: string): boolean;
	getDefaultSection(): ConfigurationSection;
	isOfflinePlayer(path: string): boolean;
	getStringList(path: string): any;
	getVector(path: string, def: Vector): Vector;
	getVector(path: string): Vector;
	getItemStack(path: string, def: ItemStack): ItemStack;
	getItemStack(path: string): ItemStack;
	getCurrentPath(): string;
	isItemStack(path: string): boolean;
	isLong(path: string): boolean;
	getMapList(path: string): any;
}

export class MemorySection {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.MemorySection');
	}
}

