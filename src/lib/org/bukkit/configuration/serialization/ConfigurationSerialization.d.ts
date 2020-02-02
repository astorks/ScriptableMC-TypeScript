import ConfigurationSerializable from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
export default interface ConfigurationSerialization {
    deserialize(args: any): ConfigurationSerializable;
}
export default class ConfigurationSerialization {
    static get $javaClass(): any;
    static get SERIALIZED_TYPE_KEY(): string;
    static deserializeObject(args: any): ConfigurationSerializable;
    static deserializeObject(args: any, clazz: any): ConfigurationSerializable;
    static registerClass(clazz: any, alias: string): void;
    static registerClass(clazz: any): void;
    static getClassByAlias(alias: string): any;
    static getAlias(clazz: any): string;
    static unregisterClass(clazz: any): void;
    static unregisterClass(alias: string): void;
}
