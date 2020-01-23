declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {Configuration} from '../../../org/bukkit/configuration/Configuration.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Color} from '../../../org/bukkit/Color.js'

export interface ConfigurationSection {
	get(path: string): any;
	get(path: string, def: any): any;
	getObject(path: string, clazz: any): any;
	getObject(path: string, clazz: any, def: any): any;
	getBoolean(path: string): boolean;
	getBoolean(path: string, def: boolean): boolean;
	getInt(path: string, def: number): number;
	getInt(path: string): number;
	getLong(path: string): number;
	getLong(path: string, def: number): number;
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
	getKeys(deep: boolean): any;
	getString(path: string, def: string): string;
	getString(path: string): string;
	getOfflinePlayer(path: string, def: OfflinePlayer): OfflinePlayer;
	getOfflinePlayer(path: string): OfflinePlayer;
	isBoolean(path: string): boolean;
	isString(path: string): boolean;
	getConfigurationSection(path: string): ConfigurationSection;
	isConfigurationSection(path: string): boolean;
	getCharacterList(path: string): any;
	isList(path: string): boolean;
	getSerializable(path: string, clazz: any, def: ConfigurationSerializable): ConfigurationSerializable;
	getSerializable(path: string, clazz: any): ConfigurationSerializable;
	isVector(path: string): boolean;
	getDefaultSection(): ConfigurationSection;
	createSection(path: string): ConfigurationSection;
	createSection(path: string, map: any): ConfigurationSection;
	isLocation(path: string): boolean;
	isDouble(path: string): boolean;
	getDoubleList(path: string): any;
	getCurrentPath(): string;
	getValues(deep: boolean): any;
	getByteList(path: string): any;
	getFloatList(path: string): any;
	getVector(path: string, def: Vector): Vector;
	getVector(path: string): Vector;
	getItemStack(path: string): ItemStack;
	getItemStack(path: string, def: ItemStack): ItemStack;
	getColor(path: string, def: Color): Color;
	getColor(path: string): Color;
	getBooleanList(path: string): any;
	getStringList(path: string): any;
	isItemStack(path: string): boolean;
	getLongList(path: string): any;
	isColor(path: string): boolean;
	getIntegerList(path: string): any;
	isOfflinePlayer(path: string): boolean;
	addDefault(path: string, value: any): void;
	getShortList(path: string): any;
	getList(path: string): any;
	getList(path: string, def: any): any;
	isLong(path: string): boolean;
	getMapList(path: string): any;
	isInt(path: string): boolean;
}

export class ConfigurationSection {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.ConfigurationSection');
	}
}

