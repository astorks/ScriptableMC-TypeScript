import Configuration from '../../../../org/bukkit/configuration/Configuration.js';
import ConfigurationOptions from '../../../../org/bukkit/configuration/ConfigurationOptions.js';
import FileConfiguration from '../../../../org/bukkit/configuration/file/FileConfiguration.js';
import MemoryConfiguration from '../../../../org/bukkit/configuration/MemoryConfiguration.js';
import MemoryConfigurationOptions from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js';
export default interface FileConfigurationOptions extends MemoryConfigurationOptions {
    copyDefaults(value: boolean): FileConfigurationOptions;
    copyDefaults(value: boolean): MemoryConfigurationOptions;
    copyDefaults(value: boolean): ConfigurationOptions;
    header(): string;
    header(value: string): FileConfigurationOptions;
    copyHeader(): boolean;
    copyHeader(value: boolean): FileConfigurationOptions;
    configuration(): Configuration;
    configuration(): MemoryConfiguration;
    configuration(): FileConfiguration;
    pathSeparator(value: string): ConfigurationOptions;
    pathSeparator(value: string): MemoryConfigurationOptions;
    pathSeparator(value: string): FileConfigurationOptions;
    copyDefaults(): boolean;
    pathSeparator(): string;
}
export default class FileConfigurationOptions {
    static get $javaClass(): any;
}
