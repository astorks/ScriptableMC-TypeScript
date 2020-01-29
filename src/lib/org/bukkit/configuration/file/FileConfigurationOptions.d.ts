import { MemoryConfiguration } from '../../../../org/bukkit/configuration/MemoryConfiguration.js';
import { Configuration } from '../../../../org/bukkit/configuration/Configuration.js';
import { FileConfiguration } from '../../../../org/bukkit/configuration/file/FileConfiguration.js';
import { MemoryConfigurationOptions } from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js';
import { ConfigurationOptions } from '../../../../org/bukkit/configuration/ConfigurationOptions.js';
export interface FileConfigurationOptions extends MemoryConfigurationOptions {
    configuration(): MemoryConfiguration;
    configuration(): Configuration;
    configuration(): FileConfiguration;
    pathSeparator(value: string): MemoryConfigurationOptions;
    pathSeparator(value: string): ConfigurationOptions;
    pathSeparator(value: string): FileConfigurationOptions;
    copyDefaults(value: boolean): MemoryConfigurationOptions;
    copyDefaults(value: boolean): ConfigurationOptions;
    copyDefaults(value: boolean): FileConfigurationOptions;
    header(): string;
    header(value: string): FileConfigurationOptions;
    copyHeader(value: boolean): FileConfigurationOptions;
    copyHeader(): boolean;
    pathSeparator(): string;
    copyDefaults(): boolean;
}
export declare class FileConfigurationOptions {
    static get $javaClass(): any;
}
