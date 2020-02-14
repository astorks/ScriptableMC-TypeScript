declare var Java: any;
import Color from '../../../../org/bukkit/Color.js'
import Configuration from '../../../../org/bukkit/configuration/Configuration.js'
import ConfigurationOptions from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import ConfigurationSection from '../../../../org/bukkit/configuration/ConfigurationSection.js'
import ConfigurationSerializable from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import File from '../../../../java/io/File.js'
import FileConfigurationOptions from '../../../../org/bukkit/configuration/file/FileConfigurationOptions.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Location from '../../../../org/bukkit/Location.js'
import MemoryConfiguration from '../../../../org/bukkit/configuration/MemoryConfiguration.js'
import MemoryConfigurationOptions from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import OfflinePlayer from '../../../../org/bukkit/OfflinePlayer.js'
import Reader from '../../../../java/io/Reader.js'
import Vector from '../../../../org/bukkit/util/Vector.js'

export default interface FileConfiguration extends MemoryConfiguration {
	addDefault(path: string, value: any): void;
	addDefaults(defaults: Configuration): void;
	addDefaults(defaults: any): void;
	contains(path: string): boolean;
	contains(path: string, ignoreDefault: boolean): boolean;
	createSection(path: string): ConfigurationSection;
	createSection(path: string, map: any): ConfigurationSection;
	get(path: string): any;
	get(path: string, def: any): any;
	getBoolean(path: string): boolean;
	getBoolean(path: string, def: boolean): boolean;
	getBooleanList(path: string): Array<boolean>;
	getByteList(path: string): Array<number>;
	getCharacterList(path: string): Array<any>;
	getColor(path: string): Color;
	getColor(path: string, def: Color): Color;
	getConfigurationSection(path: string): ConfigurationSection;
	getCurrentPath(): string;
	getDefaultSection(): ConfigurationSection;
	getDefaults(): Configuration;
	getDouble(path: string): number;
	getDouble(path: string, def: number): number;
	getDoubleList(path: string): Array<number>;
	getFloatList(path: string): Array<number>;
	getInt(path: string): number;
	getInt(path: string, def: number): number;
	getIntegerList(path: string): Array<any>;
	getItemStack(path: string): ItemStack;
	getItemStack(path: string, def: ItemStack): ItemStack;
	getKeys(deep: boolean): any;
	getList(path: string): Array<any>;
	getList(path: string, def: Array<any>): Array<any>;
	getLocation(path: string): Location;
	getLocation(path: string, def: Location): Location;
	getLong(path: string): number;
	getLong(path: string, def: number): number;
	getLongList(path: string): Array<number>;
	getMapList(path: string): Array<any>;
	getName(): string;
	getObject(path: string, clazz: any): any;
	getObject(path: string, clazz: any, def: any): any;
	getOfflinePlayer(path: string): OfflinePlayer;
	getOfflinePlayer(path: string, def: OfflinePlayer): OfflinePlayer;
	getParent(): ConfigurationSection;
	getRoot(): Configuration;
	getSerializable(path: string, clazz: any): ConfigurationSerializable;
	getSerializable(path: string, clazz: any, def: ConfigurationSerializable): ConfigurationSerializable;
	getShortList(path: string): Array<number>;
	getString(path: string): string;
	getString(path: string, def: string): string;
	getStringList(path: string): Array<string>;
	getValues(deep: boolean): any;
	getVector(path: string): Vector;
	getVector(path: string, def: Vector): Vector;
	isBoolean(path: string): boolean;
	isColor(path: string): boolean;
	isConfigurationSection(path: string): boolean;
	isDouble(path: string): boolean;
	isInt(path: string): boolean;
	isItemStack(path: string): boolean;
	isList(path: string): boolean;
	isLocation(path: string): boolean;
	isLong(path: string): boolean;
	isOfflinePlayer(path: string): boolean;
	isSet(path: string): boolean;
	isString(path: string): boolean;
	isVector(path: string): boolean;
	load(reader: Reader): void;
	load(file: File): void;
	load(file: string): void;
	loadFromString(arg0: string): void;
	options(): MemoryConfigurationOptions;
	options(): FileConfigurationOptions;
	options(): ConfigurationOptions;
	save(file: File): void;
	save(file: string): void;
	saveToString(): string;
	set(path: string, value: any): void;
	setDefaults(defaults: Configuration): void;
}

export default class FileConfiguration {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.FileConfiguration');
	}

	constructor();
	constructor(defaults: Configuration);
	constructor(...args: any[]) {
		return new FileConfiguration.$javaClass(...args);
	}

	public static createPath(section: ConfigurationSection, key: string): string;
	public static createPath(section: ConfigurationSection, key: string, relativeTo: ConfigurationSection): string;
	public static createPath(...args: any[]): any {
		return FileConfiguration.$javaClass.createPath(...args);
	}

}

