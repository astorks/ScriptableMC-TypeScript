declare var Java: any;
import Configuration from '../../../org/bukkit/configuration/Configuration.js'
import ConfigurationOptions from '../../../org/bukkit/configuration/ConfigurationOptions.js'
import MemoryConfiguration from '../../../org/bukkit/configuration/MemoryConfiguration.js'

export default interface MemoryConfigurationOptions extends ConfigurationOptions {
	configuration(): Configuration;
	configuration(): MemoryConfiguration;
	copyDefaults(): boolean;
	copyDefaults(value: boolean): ConfigurationOptions;
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	pathSeparator(): string;
	pathSeparator(value: string): ConfigurationOptions;
	pathSeparator(value: string): MemoryConfigurationOptions;
}

export default class MemoryConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.MemoryConfigurationOptions');
	}

}

