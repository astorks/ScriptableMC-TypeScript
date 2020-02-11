import Configuration from '../../../../org/bukkit/configuration/Configuration.js';
import ConfigurationOptions from '../../../../org/bukkit/configuration/ConfigurationOptions.js';
import FileConfiguration from '../../../../org/bukkit/configuration/file/FileConfiguration.js';
import MemoryConfiguration from '../../../../org/bukkit/configuration/MemoryConfiguration.js';
import MemoryConfigurationOptions from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js';
export default interface FileConfigurationOptions extends MemoryConfigurationOptions {
    configuration(): MemoryConfiguration;
    configuration(): Configuration;
    configuration(): FileConfiguration;
    pathSeparator(value: string): MemoryConfigurationOptions;
    pathSeparator(value: string): ConfigurationOptions;
    pathSeparator(value: string): FileConfigurationOptions;
    copyDefaults(value: boolean): ConfigurationOptions;
    copyDefaults(value: boolean): FileConfigurationOptions;
    copyDefaults(value: boolean): MemoryConfigurationOptions;
    copyHeader(value: boolean): FileConfigurationOptions;
    copyHeader(): boolean;
    header(): string;
    header(value: string): FileConfigurationOptions;
    pathSeparator(): string;
    copyDefaults(): boolean;
}
export default class FileConfigurationOptions {
    static get $javaClass(): any;
}
