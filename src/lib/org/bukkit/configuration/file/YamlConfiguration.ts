declare var Java: any;
import Color from '../../../../org/bukkit/Color.js'
import Configuration from '../../../../org/bukkit/configuration/Configuration.js'
import ConfigurationOptions from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import ConfigurationSection from '../../../../org/bukkit/configuration/ConfigurationSection.js'
import ConfigurationSerializable from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import File from '../../../../java/io/File.js'
import FileConfiguration from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import FileConfigurationOptions from '../../../../org/bukkit/configuration/file/FileConfigurationOptions.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Location from '../../../../org/bukkit/Location.js'
import MemoryConfigurationOptions from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import OfflinePlayer from '../../../../org/bukkit/OfflinePlayer.js'
import Reader from '../../../../java/io/Reader.js'
import Vector from '../../../../org/bukkit/util/Vector.js'
import YamlConfigurationOptions from '../../../../org/bukkit/configuration/file/YamlConfigurationOptions.js'

export default interface YamlConfiguration extends FileConfiguration {
	options(): ConfigurationOptions;
	options(): MemoryConfigurationOptions;
	options(): FileConfigurationOptions;
	options(): YamlConfigurationOptions;
	loadFromString(contents: string): void;
	saveToString(): string;
	load(reader: Reader): void;
	load(file: string): void;
	load(file: File): void;
	save(file: File): void;
	save(file: string): void;
	setDefaults(defaults: Configuration): void;
	getDefaults(): Configuration;
	addDefaults(defaults: any): void;
	addDefaults(defaults: Configuration): void;
	addDefault(path: string, value: any): void;
	getParent(): ConfigurationSection;
	getString(path: string, def: string): string;
	getString(path: string): string;
	getValues(deep: boolean): any;
	isString(path: string): boolean;
	isBoolean(path: string): boolean;
	getOfflinePlayer(path: string, def: OfflinePlayer): OfflinePlayer;
	getOfflinePlayer(path: string): OfflinePlayer;
	getColor(path: string): Color;
	getColor(path: string, def: Color): Color;
	getCurrentPath(): string;
	createSection(path: string): ConfigurationSection;
	createSection(path: string, map: any): ConfigurationSection;
	isInt(path: string): boolean;
	isDouble(path: string): boolean;
	isLong(path: string): boolean;
	getList(path: string): Array<any>;
	getList(path: string, def: Array<any>): Array<any>;
	isList(path: string): boolean;
	getStringList(path: string): Array<string>;
	getIntegerList(path: string): Array<any>;
	getBooleanList(path: string): Array<boolean>;
	getDoubleList(path: string): Array<number>;
	getFloatList(path: string): Array<number>;
	getLongList(path: string): Array<number>;
	getByteList(path: string): Array<number>;
	getCharacterList(path: string): Array<any>;
	getShortList(path: string): Array<number>;
	getMapList(path: string): Array<any>;
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
	getConfigurationSection(path: string): ConfigurationSection;
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

export default class YamlConfiguration {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.YamlConfiguration');
	}
	constructor();
	constructor(...args: any[]) {
		return new YamlConfiguration.$javaClass(...args);
	}
	public static loadConfiguration(file: File): YamlConfiguration;
	public static loadConfiguration(reader: Reader): YamlConfiguration;
	public static loadConfiguration(...args: any[]): any {
		return YamlConfiguration.$javaClass.loadConfiguration(...args);
	}
	public static createPath(section: ConfigurationSection, key: string): string;
	public static createPath(section: ConfigurationSection, key: string, relativeTo: ConfigurationSection): string;
	public static createPath(...args: any[]): any {
		return YamlConfiguration.$javaClass.createPath(...args);
	}
}

