import { Configuration } from '../../../org/bukkit/configuration/Configuration.js';
import { MemoryConfiguration } from '../../../org/bukkit/configuration/MemoryConfiguration.js';
import { ConfigurationOptions } from '../../../org/bukkit/configuration/ConfigurationOptions.js';
export interface MemoryConfigurationOptions extends ConfigurationOptions {
    configuration(): Configuration;
    configuration(): MemoryConfiguration;
    pathSeparator(value: string): ConfigurationOptions;
    pathSeparator(value: string): MemoryConfigurationOptions;
    copyDefaults(value: boolean): ConfigurationOptions;
    copyDefaults(value: boolean): MemoryConfigurationOptions;
    pathSeparator(): string;
    copyDefaults(): boolean;
}
export declare class MemoryConfigurationOptions {
    static get $javaClass(): any;
}
