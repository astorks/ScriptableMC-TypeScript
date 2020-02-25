declare var Java: any;
import ConfigurationSerializable from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export default interface ConfigurationSerialization {
	deserialize(args: any): ConfigurationSerializable;
}

export default class ConfigurationSerialization {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.serialization.ConfigurationSerialization');
	}

	public static get SERIALIZED_TYPE_KEY(): string {
		return ConfigurationSerialization.$javaClass.SERIALIZED_TYPE_KEY;
	}

	public static deserializeObject(args: any): ConfigurationSerializable;
	public static deserializeObject(args: any, clazz: any): ConfigurationSerializable;
	public static deserializeObject(...args: any[]): any {
		return ConfigurationSerialization.$javaClass.deserializeObject(...args);
	}

	public static getAlias(clazz: any): string;
	public static getAlias(...args: any[]): any {
		return ConfigurationSerialization.$javaClass.getAlias(...args);
	}

	public static getClassByAlias(alias: string): any;
	public static getClassByAlias(...args: any[]): any {
		return ConfigurationSerialization.$javaClass.getClassByAlias(...args);
	}

	public static registerClass(clazz: any): void;
	public static registerClass(clazz: any, alias: string): void;
	public static registerClass(...args: any[]): any {
		return ConfigurationSerialization.$javaClass.registerClass(...args);
	}

	public static unregisterClass(clazz: any): void;
	public static unregisterClass(alias: string): void;
	public static unregisterClass(...args: any[]): any {
		return ConfigurationSerialization.$javaClass.unregisterClass(...args);
	}

}

