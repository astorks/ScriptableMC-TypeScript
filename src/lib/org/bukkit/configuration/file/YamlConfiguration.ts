declare var Java: any;
import {ConfigurationOptions} from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import {MemoryConfigurationOptions} from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import {FileConfigurationOptions} from '../../../../org/bukkit/configuration/file/FileConfigurationOptions.js'
import {YamlConfigurationOptions} from '../../../../org/bukkit/configuration/file/YamlConfigurationOptions.js'
import {Configuration} from '../../../../org/bukkit/configuration/Configuration.js'
import {ConfigurationSection} from '../../../../org/bukkit/configuration/ConfigurationSection.js'
import {OfflinePlayer} from '../../../../org/bukkit/OfflinePlayer.js'
import {Color} from '../../../../org/bukkit/Color.js'
import {ConfigurationSerializable} from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import {Vector} from '../../../../org/bukkit/util/Vector.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {FileConfiguration} from '../../../../org/bukkit/configuration/file/FileConfiguration.js'

export interface YamlConfiguration extends FileConfiguration {
	options(): ConfigurationOptions;
	options(): MemoryConfigurationOptions;
	options(): FileConfigurationOptions;
	options(): YamlConfigurationOptions;
	loadFromString(contents: string): void;
	saveToString(): string;
	load(reader: any): void;
	load(file: string): void;
	load(file: any): void;
	save(file: any): void;
	save(file: string): void;
	setDefaults(defaults: Configuration): void;
	addDefaults(defaults: any): void;
	addDefaults(defaults: Configuration): void;
	getDefaults(): Configuration;
	addDefault(path: string, value: any): void;
	getParent(): ConfigurationSection;
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
	getLocation(path: string, def: Location): Location;
	getLocation(path: string): Location;
	isSet(path: string): boolean;
	set(path: string, value: any): void;
	getRoot(): Configuration;
	getKeys(deep: boolean): any;
}

export class YamlConfiguration {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.YamlConfiguration');
	}
	constructor();
	constructor(...args: any[]) {
		return new YamlConfiguration.$javaClass(...args);
	}
	public static loadConfiguration(file: any): YamlConfiguration;
	public static loadConfiguration(reader: any): YamlConfiguration;
	public static loadConfiguration(...args: any[]): any {
		return YamlConfiguration.$javaClass.loadConfiguration(...args);
	}
	public static createPath(section: ConfigurationSection, key: string, relativeTo: ConfigurationSection): string;
	public static createPath(section: ConfigurationSection, key: string): string;
	public static createPath(...args: any[]): any {
		return YamlConfiguration.$javaClass.createPath(...args);
	}
}

