import Color from '../../../org/bukkit/Color.js';
import Configuration from '../../../org/bukkit/configuration/Configuration.js';
import ConfigurationSection from '../../../org/bukkit/configuration/ConfigurationSection.js';
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Location from '../../../org/bukkit/Location.js';
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js';
import Vector from '../../../org/bukkit/util/Vector.js';
export default interface MemorySection extends ConfigurationSection {
    get(path: string, def: any): any;
    get(path: string): any;
    getObject(path: string, clazz: any, def: any): any;
    getObject(path: string, clazz: any): any;
    getBoolean(path: string, def: boolean): boolean;
    getBoolean(path: string): boolean;
    getInt(path: string): number;
    getInt(path: string, def: number): number;
    getLong(path: string): number;
    getLong(path: string, def: number): number;
    getDouble(path: string, def: number): number;
    getDouble(path: string): number;
    getName(): string;
    contains(path: string, ignoreDefault: boolean): boolean;
    contains(path: string): boolean;
    getParent(): ConfigurationSection;
    set(path: string, value: any): void;
    getLocation(path: string, def: Location): Location;
    getLocation(path: string): Location;
    isSet(path: string): boolean;
    getRoot(): Configuration;
    getKeys(deep: boolean): any;
    getString(path: string): string;
    getString(path: string, def: string): string;
    getOfflinePlayer(path: string, def: OfflinePlayer): OfflinePlayer;
    getOfflinePlayer(path: string): OfflinePlayer;
    isString(path: string): boolean;
    isBoolean(path: string): boolean;
    getLongList(path: string): any;
    addDefault(path: string, value: any): void;
    getByteList(path: string): any;
    getCharacterList(path: string): any;
    createSection(path: string): ConfigurationSection;
    createSection(path: string, map: any): ConfigurationSection;
    getList(path: string, def: any): any;
    getList(path: string): any;
    getDoubleList(path: string): any;
    isLong(path: string): boolean;
    getValues(deep: boolean): any;
    isInt(path: string): boolean;
    isDouble(path: string): boolean;
    isList(path: string): boolean;
    getBooleanList(path: string): any;
    getCurrentPath(): string;
    getStringList(path: string): any;
    getIntegerList(path: string): any;
    getFloatList(path: string): any;
    getShortList(path: string): any;
    isVector(path: string): boolean;
    getDefaultSection(): ConfigurationSection;
    isColor(path: string): boolean;
    getMapList(path: string): any;
    getVector(path: string, def: Vector): Vector;
    getVector(path: string): Vector;
    isLocation(path: string): boolean;
    getColor(path: string): Color;
    getColor(path: string, def: Color): Color;
    getSerializable(path: string, clazz: any, def: ConfigurationSerializable): ConfigurationSerializable;
    getSerializable(path: string, clazz: any): ConfigurationSerializable;
    isOfflinePlayer(path: string): boolean;
    getItemStack(path: string, def: ItemStack): ItemStack;
    getItemStack(path: string): ItemStack;
    isItemStack(path: string): boolean;
    getConfigurationSection(path: string): ConfigurationSection;
    isConfigurationSection(path: string): boolean;
}
export default class MemorySection {
    static get $javaClass(): any;
    static createPath(section: ConfigurationSection, key: string, relativeTo: ConfigurationSection): string;
    static createPath(section: ConfigurationSection, key: string): string;
}
