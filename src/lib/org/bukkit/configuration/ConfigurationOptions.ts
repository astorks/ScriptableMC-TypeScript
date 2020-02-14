declare var Java: any;
import Configuration from '../../../org/bukkit/configuration/Configuration.js'

export default interface ConfigurationOptions {
	configuration(): Configuration;
	copyDefaults(): boolean;
	copyDefaults(value: boolean): ConfigurationOptions;
	pathSeparator(): string;
	pathSeparator(value: string): ConfigurationOptions;
}

export default class ConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.ConfigurationOptions');
	}

}

