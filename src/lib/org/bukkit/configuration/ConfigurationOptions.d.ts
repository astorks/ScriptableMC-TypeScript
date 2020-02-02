import Configuration from '../../../org/bukkit/configuration/Configuration.js';
export default interface ConfigurationOptions {
    configuration(): Configuration;
    pathSeparator(value: string): ConfigurationOptions;
    pathSeparator(): string;
    copyDefaults(): boolean;
    copyDefaults(value: boolean): ConfigurationOptions;
}
export default class ConfigurationOptions {
    static get $javaClass(): any;
}
