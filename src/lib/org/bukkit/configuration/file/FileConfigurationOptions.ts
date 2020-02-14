declare var Java: any;
import Configuration from '../../../../org/bukkit/configuration/Configuration.js'
import ConfigurationOptions from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import FileConfiguration from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import MemoryConfiguration from '../../../../org/bukkit/configuration/MemoryConfiguration.js'
import MemoryConfigurationOptions from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'

export default interface FileConfigurationOptions extends MemoryConfigurationOptions {
	header(value: string): FileConfigurationOptions;
	header(): string;
	copyDefaults(value: boolean): ConfigurationOptions;
	copyDefaults(value: boolean): FileConfigurationOptions;
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	copyHeader(): boolean;
	copyHeader(value: boolean): FileConfigurationOptions;
	configuration(): Configuration;
	configuration(): MemoryConfiguration;
	configuration(): FileConfiguration;
	pathSeparator(value: string): ConfigurationOptions;
	pathSeparator(value: string): MemoryConfigurationOptions;
	pathSeparator(value: string): FileConfigurationOptions;
	copyDefaults(): boolean;
	pathSeparator(): string;
}

export default class FileConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.FileConfigurationOptions');
	}
}

