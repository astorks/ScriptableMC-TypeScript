declare var Java: any;
import {MemoryConfigurationOptions} from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import {ConfigurationOptions} from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import {Configuration} from '../../../../org/bukkit/configuration/Configuration.js'
import {MemoryConfiguration} from '../../../../org/bukkit/configuration/MemoryConfiguration.js'
import {FileConfiguration} from '../../../../org/bukkit/configuration/file/FileConfiguration.js'

export interface FileConfigurationOptions extends MemoryConfigurationOptions {
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	copyDefaults(value: boolean): FileConfigurationOptions;
	copyDefaults(value: boolean): ConfigurationOptions;
	configuration(): Configuration;
	configuration(): MemoryConfiguration;
	configuration(): FileConfiguration;
	header(): string;
	header(value: string): FileConfigurationOptions;
	copyHeader(value: boolean): FileConfigurationOptions;
	copyHeader(): boolean;
	pathSeparator(value: string): ConfigurationOptions;
	pathSeparator(value: string): MemoryConfigurationOptions;
	pathSeparator(value: string): FileConfigurationOptions;
	copyDefaults(): boolean;
	pathSeparator(): string;
}

export class FileConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.FileConfigurationOptions');
	}
}

