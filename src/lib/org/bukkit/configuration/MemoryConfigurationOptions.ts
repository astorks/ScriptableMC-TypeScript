declare var Java: any;
import {ConfigurationOptions} from '../../../org/bukkit/configuration/ConfigurationOptions.js'
import {MemoryConfiguration} from '../../../org/bukkit/configuration/MemoryConfiguration.js'
import {Configuration} from '../../../org/bukkit/configuration/Configuration.js'

export interface MemoryConfigurationOptions extends ConfigurationOptions {
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	copyDefaults(value: boolean): ConfigurationOptions;
	configuration(): MemoryConfiguration;
	configuration(): Configuration;
	pathSeparator(value: string): ConfigurationOptions;
	pathSeparator(value: string): MemoryConfigurationOptions;
	copyDefaults(): boolean;
	pathSeparator(): string;
}

export class MemoryConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.MemoryConfigurationOptions');
	}
}

