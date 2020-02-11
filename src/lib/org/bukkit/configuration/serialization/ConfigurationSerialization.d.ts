import ConfigurationSerializable from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
export default interface ConfigurationSerialization {
    deserialize(args: any): ConfigurationSerializable;
}
export default class ConfigurationSerialization {
    static get $javaClass(): any;
    static get SERIALIZED_TYPE_KEY(): string;
    static unregisterClass(clazz: any): void;
    static unregisterClass(alias: string): void;
    static getClassByAlias(alias: string): any;
    static getAlias(clazz: any): string;
    static registerClass(clazz: any): void;
    static registerClass(clazz: any, alias: string): void;
    static deserializeObject(args: any, clazz: any): ConfigurationSerializable;
    static deserializeObject(args: any): ConfigurationSerializable;
}
