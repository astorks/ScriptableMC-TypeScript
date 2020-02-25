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
	addDefault(arg0: string, arg1: any): void;
	addDefaults(arg0: Configuration): void;
	addDefaults(arg0: any): void;
	contains(arg0: string): boolean;
	contains(arg0: string, arg1: boolean): boolean;
	createSection(arg0: string): ConfigurationSection;
	createSection(arg0: string, arg1: any): ConfigurationSection;
	get(arg0: string): any;
	get(arg0: string, arg1: any): any;
	getBoolean(arg0: string): boolean;
	getBoolean(arg0: string, arg1: boolean): boolean;
	getBooleanList(arg0: string): Array<boolean>;
	getByteList(arg0: string): Array<number>;
	getCharacterList(arg0: string): Array<any>;
	getColor(arg0: string): Color;
	getColor(arg0: string, arg1: Color): Color;
	getConfigurationSection(arg0: string): ConfigurationSection;
	getCurrentPath(): string;
	getDefaultSection(): ConfigurationSection;
	getDefaults(): Configuration;
	getDouble(arg0: string): number;
	getDouble(arg0: string, arg1: number): number;
	getDoubleList(arg0: string): Array<number>;
	getFloatList(arg0: string): Array<number>;
	getInt(arg0: string): number;
	getInt(arg0: string, arg1: number): number;
	getIntegerList(arg0: string): Array<any>;
	getItemStack(arg0: string): ItemStack;
	getItemStack(arg0: string, arg1: ItemStack): ItemStack;
	getKeys(arg0: boolean): any;
	getList(arg0: string): Array<any>;
	getList(arg0: string, arg1: Array<any>): Array<any>;
	getLocation(arg0: string): Location;
	getLocation(arg0: string, arg1: Location): Location;
	getLong(arg0: string): number;
	getLong(arg0: string, arg1: number): number;
	getLongList(arg0: string): Array<number>;
	getMapList(arg0: string): Array<any>;
	getName(): string;
	getObject(arg0: string, arg1: any): any;
	getObject(arg0: string, arg1: any, arg2: any): any;
	getOfflinePlayer(arg0: string): OfflinePlayer;
	getOfflinePlayer(arg0: string, arg1: OfflinePlayer): OfflinePlayer;
	getParent(): ConfigurationSection;
	getRoot(): Configuration;
	getSerializable(arg0: string, arg1: any): ConfigurationSerializable;
	getSerializable(arg0: string, arg1: any, arg2: ConfigurationSerializable): ConfigurationSerializable;
	getShortList(arg0: string): Array<number>;
	getString(arg0: string): string;
	getString(arg0: string, arg1: string): string;
	getStringList(arg0: string): Array<string>;
	getValues(arg0: boolean): any;
	getVector(arg0: string): Vector;
	getVector(arg0: string, arg1: Vector): Vector;
	isBoolean(arg0: string): boolean;
	isColor(arg0: string): boolean;
	isConfigurationSection(arg0: string): boolean;
	isDouble(arg0: string): boolean;
	isInt(arg0: string): boolean;
	isItemStack(arg0: string): boolean;
	isList(arg0: string): boolean;
	isLocation(arg0: string): boolean;
	isLong(arg0: string): boolean;
	isOfflinePlayer(arg0: string): boolean;
	isSet(arg0: string): boolean;
	isString(arg0: string): boolean;
	isVector(arg0: string): boolean;
	options(): ConfigurationOptions;
	set(arg0: string, arg1: any): void;
	setDefaults(arg0: Configuration): void;
}

export default class Configuration {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.Configuration');
	}

}

