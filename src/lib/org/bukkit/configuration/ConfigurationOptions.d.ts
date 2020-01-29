import { Configuration } from '../../../org/bukkit/configuration/Configuration.js';
export interface ConfigurationOptions {
    configuration(): Configuration;
    pathSeparator(value: string): ConfigurationOptions;
    pathSeparator(): string;
    copyDefaults(): boolean;
    copyDefaults(value: boolean): ConfigurationOptions;
}
export declare class ConfigurationOptions {
    static get $javaClass(): any;
}
