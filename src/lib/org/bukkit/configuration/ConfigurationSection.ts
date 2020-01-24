declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {Configuration} from '../../../org/bukkit/configuration/Configuration.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {Color} from '../../../org/bukkit/Color.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'

export interface ConfigurationSection {
	get(path: string, def: any): any;
	get(path: string): any;
	getObject(path: string, clazz: any, def: any): any;
	getObject(path: string, clazz: any): any;
	getBoolean(path: string): boolean;
	getBoolean(path: string, def: boolean): boolean;
	getInt(path: string): number;
	getInt(path: string, def: number): number;
	getLong(path: string, def: number): number;
	getLong(path: string): number;
	getDouble(path: string, def: number): number;
	getDouble(path: string): number;
	getName(): string;
	contains(path: string): boolean;
	contains(path: string, ignoreDefault: boolean): boolean;
	getParent(): ConfigurationSection;
	set(path: string, value: any): void;
	getLocation(path: string, def: Location): Location;
	getLocation(path: string): Location;
	isSet(path: string): boolean;
	getRoot(): Configuration;
	getString(path: string, def: string): string;
	getString(path: string): string;
	getKeys(deep: boolean): any;
	getOfflinePlayer(path: string): OfflinePlayer;
	getOfflinePlayer(path: string, def: OfflinePlayer): OfflinePlayer;
	isString(path: string): boolean;
	isBoolean(path: string): boolean;
	isConfigurationSection(path: string): boolean;
	getConfigurationSection(path: string): ConfigurationSection;
	addDefault(path: string, value: any): void;
	getValues(deep: boolean): any;
	getColor(path: string): Color;
	getColor(path: string, def: Color): Color;
	createSection(path: string): ConfigurationSection;
	createSection(path: string, map: any): ConfigurationSection;
	getIntegerList(path: string): any;
	getDoubleList(path: string): any;
	getShortList(path: string): any;
	isColor(path: string): boolean;
	isList(path: string): boolean;
	getSerializable(path: string, clazz: any, def: ConfigurationSerializable): ConfigurationSerializable;
	getSerializable(path: string, clazz: any): ConfigurationSerializable;
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
	getVector(path: string): Vector;
	getVector(path: string, def: Vector): Vector;
	getItemStack(path: string, def: ItemStack): ItemStack;
	getItemStack(path: string): ItemStack;
	getCurrentPath(): string;
	isItemStack(path: string): boolean;
	isLong(path: string): boolean;
	getMapList(path: string): any;
}

export class ConfigurationSection {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.ConfigurationSection');
	}
}

