declare var Java: any;
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {Color} from '../../../org/bukkit/Color.js'
import {ConfigurationSection} from '../../../org/bukkit/configuration/ConfigurationSection.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Configuration} from '../../../org/bukkit/configuration/Configuration.js'

export interface MemorySection extends ConfigurationSection {
	getString(path: string): string;
	getString(path: string, def: string): string;
	getOfflinePlayer(path: string): OfflinePlayer;
	getOfflinePlayer(path: string, def: OfflinePlayer): OfflinePlayer;
	isString(path: string): boolean;
	isBoolean(path: string): boolean;
	getColor(path: string, def: Color): Color;
	getColor(path: string): Color;
	getValues(deep: boolean): any;
	createSection(path: string): ConfigurationSection;
	createSection(path: string, map: any): ConfigurationSection;
	isInt(path: string): boolean;
	isDouble(path: string): boolean;
	isLong(path: string): boolean;
	getList(path: string): any;
	getList(path: string, def: any): any;
	isList(path: string): boolean;
	getStringList(path: string): any;
	getIntegerList(path: string): any;
	getBooleanList(path: string): any;
	getDoubleList(path: string): any;
	getFloatList(path: string): any;
	getLongList(path: string): any;
	getByteList(path: string): any;
	getCharacterList(path: string): any;
	getShortList(path: string): any;
	getMapList(path: string): any;
	getConfigurationSection(path: string): ConfigurationSection;
	getCurrentPath(): string;
	getSerializable(path: string, clazz: any, def: ConfigurationSerializable): ConfigurationSerializable;
	getSerializable(path: string, clazz: any): ConfigurationSerializable;
	getVector(path: string, def: Vector): Vector;
	getVector(path: string): Vector;
	isVector(path: string): boolean;
	isOfflinePlayer(path: string): boolean;
	getItemStack(path: string): ItemStack;
	getItemStack(path: string, def: ItemStack): ItemStack;
	isItemStack(path: string): boolean;
	isColor(path: string): boolean;
	isLocation(path: string): boolean;
	isConfigurationSection(path: string): boolean;
	getDefaultSection(): ConfigurationSection;
	addDefault(path: string, value: any): void;
	get(path: string): any;
	get(path: string, def: any): any;
	getObject(path: string, clazz: any, def: any): any;
	getObject(path: string, clazz: any): any;
	getBoolean(path: string): boolean;
	getBoolean(path: string, def: boolean): boolean;
	getInt(path: string): number;
	getInt(path: string, def: number): number;
	getLong(path: string, def: number): number;
	getLong(path: string): number;
	getDouble(path: string): number;
	getDouble(path: string, def: number): number;
	getName(): string;
	contains(path: string): boolean;
	contains(path: string, ignoreDefault: boolean): boolean;
	getParent(): ConfigurationSection;
	getLocation(path: string, def: Location): Location;
	getLocation(path: string): Location;
	isSet(path: string): boolean;
	set(path: string, value: any): void;
	getRoot(): Configuration;
	getKeys(deep: boolean): any;
}

export class MemorySection {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.MemorySection');
	}
	public static createPath(section: ConfigurationSection, key: string, relativeTo: ConfigurationSection): string;
	public static createPath(section: ConfigurationSection, key: string): string;
	public static createPath(...args: any[]): any {
		return MemorySection.$javaClass.createPath(...args);
	}
}

