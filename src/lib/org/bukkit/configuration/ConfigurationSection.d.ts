import Color from '../../../org/bukkit/Color.js';
import Configuration from '../../../org/bukkit/configuration/Configuration.js';
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Location from '../../../org/bukkit/Location.js';
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js';
import Vector from '../../../org/bukkit/util/Vector.js';
export default interface ConfigurationSection {
    get(arg0: string, arg1: any): any;
    get(arg0: string): any;
    getObject(arg0: string, arg1: any, arg2: any): any;
    getObject(arg0: string, arg1: any): any;
    getBoolean(arg0: string, arg1: boolean): boolean;
    getBoolean(arg0: string): boolean;
    getInt(arg0: string): number;
    getInt(arg0: string, arg1: number): number;
    getLong(arg0: string): number;
    getLong(arg0: string, arg1: number): number;
    getDouble(arg0: string): number;
    getDouble(arg0: string, arg1: number): number;
    getName(): string;
    contains(arg0: string): boolean;
    contains(arg0: string, arg1: boolean): boolean;
    getParent(): ConfigurationSection;
    set(arg0: string, arg1: any): void;
    getLocation(arg0: string): Location;
    getLocation(arg0: string, arg1: Location): Location;
    isSet(arg0: string): boolean;
    getRoot(): Configuration;
    getKeys(arg0: boolean): any;
    getString(arg0: string, arg1: string): string;
    getString(arg0: string): string;
    getOfflinePlayer(arg0: string, arg1: OfflinePlayer): OfflinePlayer;
    getOfflinePlayer(arg0: string): OfflinePlayer;
    isString(arg0: string): boolean;
    isBoolean(arg0: string): boolean;
    getLongList(arg0: string): any;
    addDefault(arg0: string, arg1: any): void;
    getByteList(arg0: string): any;
    getCharacterList(arg0: string): any;
    createSection(arg0: string, arg1: any): ConfigurationSection;
    createSection(arg0: string): ConfigurationSection;
    getList(arg0: string, arg1: any): any;
    getList(arg0: string): any;
    getDoubleList(arg0: string): any;
    isLong(arg0: string): boolean;
    getValues(arg0: boolean): any;
    isInt(arg0: string): boolean;
    isDouble(arg0: string): boolean;
    isList(arg0: string): boolean;
    getBooleanList(arg0: string): any;
    getCurrentPath(): string;
    getStringList(arg0: string): any;
    getIntegerList(arg0: string): any;
    getFloatList(arg0: string): any;
    getShortList(arg0: string): any;
    isVector(arg0: string): boolean;
    getDefaultSection(): ConfigurationSection;
    isColor(arg0: string): boolean;
    getMapList(arg0: string): any;
    getVector(arg0: string): Vector;
    getVector(arg0: string, arg1: Vector): Vector;
    isLocation(arg0: string): boolean;
    getColor(arg0: string, arg1: Color): Color;
    getColor(arg0: string): Color;
    getSerializable(arg0: string, arg1: any): ConfigurationSerializable;
    getSerializable(arg0: string, arg1: any, arg2: ConfigurationSerializable): ConfigurationSerializable;
    isOfflinePlayer(arg0: string): boolean;
    getItemStack(arg0: string): ItemStack;
    getItemStack(arg0: string, arg1: ItemStack): ItemStack;
    isItemStack(arg0: string): boolean;
    getConfigurationSection(arg0: string): ConfigurationSection;
    isConfigurationSection(arg0: string): boolean;
}
export default class ConfigurationSection {
    static get $javaClass(): any;
}
