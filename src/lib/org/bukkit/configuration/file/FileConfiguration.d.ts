import { MemoryConfigurationOptions } from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js';
import { FileConfigurationOptions } from '../../../../org/bukkit/configuration/file/FileConfigurationOptions.js';
import { ConfigurationOptions } from '../../../../org/bukkit/configuration/ConfigurationOptions.js';
import { ConfigurationSection } from '../../../../org/bukkit/configuration/ConfigurationSection.js';
import { Configuration } from '../../../../org/bukkit/configuration/Configuration.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { OfflinePlayer } from '../../../../org/bukkit/OfflinePlayer.js';
import { Vector } from '../../../../org/bukkit/util/Vector.js';
import { ConfigurationSerializable } from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import { Color } from '../../../../org/bukkit/Color.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { MemoryConfiguration } from '../../../../org/bukkit/configuration/MemoryConfiguration.js';
export interface FileConfiguration extends MemoryConfiguration {
    load(reader: any): void;
    load(file: any): void;
    load(file: string): void;
    save(file: any): void;
    save(file: string): void;
    options(): MemoryConfigurationOptions;
    options(): FileConfigurationOptions;
    options(): ConfigurationOptions;
    saveToString(): string;
    loadFromString(arg0: string): void;
    getParent(): ConfigurationSection;
    setDefaults(defaults: Configuration): void;
    addDefaults(defaults: Configuration): void;
    addDefaults(defaults: any): void;
    getDefaults(): Configuration;
    addDefault(path: string, value: any): void;
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
    set(path: string, value: any): void;
    getLocation(path: string, def: Location): Location;
    getLocation(path: string): Location;
    isSet(path: string): boolean;
    getRoot(): Configuration;
    getKeys(deep: boolean): any;
    getString(path: string): string;
    getString(path: string, def: string): string;
    isBoolean(path: string): boolean;
    isString(path: string): boolean;
    getOfflinePlayer(path: string, def: OfflinePlayer): OfflinePlayer;
    getOfflinePlayer(path: string): OfflinePlayer;
    isConfigurationSection(path: string): boolean;
    getConfigurationSection(path: string): ConfigurationSection;
    getList(path: string): any;
    getList(path: string, def: any): any;
    isItemStack(path: string): boolean;
    getDoubleList(path: string): any;
    getCurrentPath(): string;
    isInt(path: string): boolean;
    getFloatList(path: string): any;
    getVector(path: string): Vector;
    getVector(path: string, def: Vector): Vector;
    isDouble(path: string): boolean;
    isLong(path: string): boolean;
    isList(path: string): boolean;
    getDefaultSection(): ConfigurationSection;
    getLongList(path: string): any;
    getSerializable(path: string, clazz: any, def: ConfigurationSerializable): ConfigurationSerializable;
    getSerializable(path: string, clazz: any): ConfigurationSerializable;
    getByteList(path: string): any;
    isOfflinePlayer(path: string): boolean;
    getColor(path: string, def: Color): Color;
    getColor(path: string): Color;
    isLocation(path: string): boolean;
    getCharacterList(path: string): any;
    getBooleanList(path: string): any;
    createSection(path: string, map: any): ConfigurationSection;
    createSection(path: string): ConfigurationSection;
    getStringList(path: string): any;
    getIntegerList(path: string): any;
    getValues(deep: boolean): any;
    getItemStack(path: string): ItemStack;
    getItemStack(path: string, def: ItemStack): ItemStack;
    isColor(path: string): boolean;
    getShortList(path: string): any;
    isVector(path: string): boolean;
    getMapList(path: string): any;
}
export declare class FileConfiguration {
    static get $javaClass(): any;
    constructor();
    constructor(defaults: Configuration);
    static createPath(section: ConfigurationSection, key: string, relativeTo: ConfigurationSection): string;
    static createPath(section: ConfigurationSection, key: string): string;
}
