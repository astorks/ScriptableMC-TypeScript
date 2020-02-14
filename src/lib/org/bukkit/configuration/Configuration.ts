declare var Java: any;
import Color from '../../../org/bukkit/Color.js'
import ConfigurationOptions from '../../../org/bukkit/configuration/ConfigurationOptions.js'
import ConfigurationSection from '../../../org/bukkit/configuration/ConfigurationSection.js'
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Location from '../../../org/bukkit/Location.js'
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js'
import Vector from '../../../org/bukkit/util/Vector.js'

export default interface Configuration extends ConfigurationSection {
	options(): ConfigurationOptions;
	setDefaults(arg0: Configuration): void;
	getDefaults(): Configuration;
	addDefaults(arg0: Configuration): void;
	addDefaults(arg0: any): void;
	addDefault(arg0: string, arg1: any): void;
	getString(arg0: string, arg1: string): string;
	getString(arg0: string): string;
	getValues(arg0: boolean): any;
	isString(arg0: string): boolean;
	isBoolean(arg0: string): boolean;
	getOfflinePlayer(arg0: string): OfflinePlayer;
	getOfflinePlayer(arg0: string, arg1: OfflinePlayer): OfflinePlayer;
	getColor(arg0: string): Color;
	getColor(arg0: string, arg1: Color): Color;
	getCurrentPath(): string;
	createSection(arg0: string): ConfigurationSection;
	createSection(arg0: string, arg1: any): ConfigurationSection;
	isInt(arg0: string): boolean;
	isDouble(arg0: string): boolean;
	isLong(arg0: string): boolean;
	getList(arg0: string): Array<any>;
	getList(arg0: string, arg1: Array<any>): Array<any>;
	isList(arg0: string): boolean;
	getStringList(arg0: string): Array<string>;
	getIntegerList(arg0: string): Array<any>;
	getBooleanList(arg0: string): Array<boolean>;
	getDoubleList(arg0: string): Array<number>;
	getFloatList(arg0: string): Array<number>;
	getLongList(arg0: string): Array<number>;
	getByteList(arg0: string): Array<number>;
	getCharacterList(arg0: string): Array<any>;
	getShortList(arg0: string): Array<number>;
	getMapList(arg0: string): Array<any>;
	getSerializable(arg0: string, arg1: any): ConfigurationSerializable;
	getSerializable(arg0: string, arg1: any, arg2: ConfigurationSerializable): ConfigurationSerializable;
	getVector(arg0: string, arg1: Vector): Vector;
	getVector(arg0: string): Vector;
	isVector(arg0: string): boolean;
	isOfflinePlayer(arg0: string): boolean;
	getItemStack(arg0: string, arg1: ItemStack): ItemStack;
	getItemStack(arg0: string): ItemStack;
	isItemStack(arg0: string): boolean;
	isColor(arg0: string): boolean;
	isLocation(arg0: string): boolean;
	getConfigurationSection(arg0: string): ConfigurationSection;
	isConfigurationSection(arg0: string): boolean;
	getDefaultSection(): ConfigurationSection;
	get(arg0: string): any;
	get(arg0: string, arg1: any): any;
	getObject(arg0: string, arg1: any): any;
	getObject(arg0: string, arg1: any, arg2: any): any;
	getBoolean(arg0: string): boolean;
	getBoolean(arg0: string, arg1: boolean): boolean;
	getInt(arg0: string, arg1: number): number;
	getInt(arg0: string): number;
	getLong(arg0: string): number;
	getLong(arg0: string, arg1: number): number;
	getDouble(arg0: string, arg1: number): number;
	getDouble(arg0: string): number;
	getName(): string;
	contains(arg0: string): boolean;
	contains(arg0: string, arg1: boolean): boolean;
	getParent(): ConfigurationSection;
	getLocation(arg0: string, arg1: Location): Location;
	getLocation(arg0: string): Location;
	isSet(arg0: string): boolean;
	set(arg0: string, arg1: any): void;
	getRoot(): Configuration;
	getKeys(arg0: boolean): any;
}

export default class Configuration {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.Configuration');
	}
}

