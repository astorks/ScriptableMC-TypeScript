declare var Java: any;
import Configuration from '../../../org/bukkit/configuration/Configuration.js'
import ConfigurationOptions from '../../../org/bukkit/configuration/ConfigurationOptions.js'
import MemoryConfiguration from '../../../org/bukkit/configuration/MemoryConfiguration.js'

export default interface MemoryConfigurationOptions extends ConfigurationOptions {
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	copyDefaults(value: boolean): ConfigurationOptions;
	configuration(): MemoryConfiguration;
	configuration(): Configuration;
	pathSeparator(value: string): ConfigurationOptions;
	pathSeparator(value: string): MemoryConfigurationOptions;
	copyDefaults(): boolean;
	pathSeparator(): string;
}

export default class MemoryConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.MemoryConfigurationOptions');
	}
}

