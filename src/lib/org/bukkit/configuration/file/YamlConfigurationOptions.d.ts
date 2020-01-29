import { Configuration } from '../../../../org/bukkit/configuration/Configuration.js';
import { MemoryConfiguration } from '../../../../org/bukkit/configuration/MemoryConfiguration.js';
import { FileConfiguration } from '../../../../org/bukkit/configuration/file/FileConfiguration.js';
import { YamlConfiguration } from '../../../../org/bukkit/configuration/file/YamlConfiguration.js';
import { FileConfigurationOptions } from '../../../../org/bukkit/configuration/file/FileConfigurationOptions.js';
import { ConfigurationOptions } from '../../../../org/bukkit/configuration/ConfigurationOptions.js';
import { MemoryConfigurationOptions } from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js';
export interface YamlConfigurationOptions extends FileConfigurationOptions {
    indent(value: number): YamlConfigurationOptions;
    indent(): number;
    configuration(): Configuration;
    configuration(): MemoryConfiguration;
    configuration(): FileConfiguration;
    configuration(): YamlConfiguration;
    pathSeparator(value: string): FileConfigurationOptions;
    pathSeparator(value: string): YamlConfigurationOptions;
    pathSeparator(value: string): ConfigurationOptions;
    pathSeparator(value: string): MemoryConfigurationOptions;
    copyDefaults(value: boolean): ConfigurationOptions;
    copyDefaults(value: boolean): MemoryConfigurationOptions;
    copyDefaults(value: boolean): YamlConfigurationOptions;
    copyDefaults(value: boolean): FileConfigurationOptions;
    header(value: string): YamlConfigurationOptions;
    header(value: string): FileConfigurationOptions;
    copyHeader(value: boolean): FileConfigurationOptions;
    copyHeader(value: boolean): YamlConfigurationOptions;
    header(): string;
    copyHeader(): boolean;
    pathSeparator(): string;
    copyDefaults(): boolean;
}
export declare class YamlConfigurationOptions {
    static get $javaClass(): any;
}
