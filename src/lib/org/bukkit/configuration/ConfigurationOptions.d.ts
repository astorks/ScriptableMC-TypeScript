import { Configuration } from '../../../org/bukkit/configuration/Configuration.js';
export interface ConfigurationOptions {
    copyDefaults(): boolean;
    copyDefaults(value: boolean): ConfigurationOptions;
    configuration(): Configuration;
    pathSeparator(): string;
    pathSeparator(value: string): ConfigurationOptions;
}
export declare class ConfigurationOptions {
    static get $javaClass(): any;
}
