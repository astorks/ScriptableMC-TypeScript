import { FileConfigurationOptions } from '../../../../org/bukkit/configuration/file/FileConfigurationOptions.js';
import { ConfigurationOptions } from '../../../../org/bukkit/configuration/ConfigurationOptions.js';
import { MemoryConfigurationOptions } from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js';
import { YamlConfiguration } from '../../../../org/bukkit/configuration/file/YamlConfiguration.js';
import { Configuration } from '../../../../org/bukkit/configuration/Configuration.js';
import { MemoryConfiguration } from '../../../../org/bukkit/configuration/MemoryConfiguration.js';
import { FileConfiguration } from '../../../../org/bukkit/configuration/file/FileConfiguration.js';
export interface YamlConfigurationOptions extends FileConfigurationOptions {
    copyDefaults(value: boolean): FileConfigurationOptions;
    copyDefaults(value: boolean): YamlConfigurationOptions;
    copyDefaults(value: boolean): ConfigurationOptions;
    copyDefaults(value: boolean): MemoryConfigurationOptions;
    indent(): number;
    indent(value: number): YamlConfigurationOptions;
    header(value: string): FileConfigurationOptions;
    header(value: string): YamlConfigurationOptions;
    copyHeader(value: boolean): YamlConfigurationOptions;
    copyHeader(value: boolean): FileConfigurationOptions;
    configuration(): YamlConfiguration;
    configuration(): Configuration;
    configuration(): MemoryConfiguration;
    configuration(): FileConfiguration;
    pathSeparator(value: string): MemoryConfigurationOptions;
    pathSeparator(value: string): ConfigurationOptions;
    pathSeparator(value: string): FileConfigurationOptions;
    pathSeparator(value: string): YamlConfigurationOptions;
    header(): string;
    copyHeader(): boolean;
    copyDefaults(): boolean;
    pathSeparator(): string;
}
export declare class YamlConfigurationOptions {
    static get $javaClass(): any;
}
