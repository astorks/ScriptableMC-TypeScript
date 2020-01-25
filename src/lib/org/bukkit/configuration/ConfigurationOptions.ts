declare var Java: any;
import {Configuration} from '../../../org/bukkit/configuration/Configuration.js'

export interface ConfigurationOptions {
	copyDefaults(): boolean;
	copyDefaults(value: boolean): ConfigurationOptions;
	configuration(): Configuration;
	pathSeparator(): string;
	pathSeparator(value: string): ConfigurationOptions;
}

export class ConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.ConfigurationOptions');
	}
}

