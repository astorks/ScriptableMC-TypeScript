import Configuration from '../../../org/bukkit/configuration/Configuration.js';
export default interface ConfigurationOptions {
    copyDefaults(): boolean;
    copyDefaults(value: boolean): ConfigurationOptions;
    configuration(): Configuration;
    pathSeparator(): string;
    pathSeparator(value: string): ConfigurationOptions;
}
export default class ConfigurationOptions {
    static get $javaClass(): any;
}
