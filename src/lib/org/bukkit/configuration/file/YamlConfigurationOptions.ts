declare var Java: any;
import Configuration from '../../../../org/bukkit/configuration/Configuration.js'
import ConfigurationOptions from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import FileConfiguration from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import FileConfigurationOptions from '../../../../org/bukkit/configuration/file/FileConfigurationOptions.js'
import MemoryConfiguration from '../../../../org/bukkit/configuration/MemoryConfiguration.js'
import MemoryConfigurationOptions from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import YamlConfiguration from '../../../../org/bukkit/configuration/file/YamlConfiguration.js'

export default interface YamlConfigurationOptions extends FileConfigurationOptions {
	header(value: string): FileConfigurationOptions;
	header(value: string): YamlConfigurationOptions;
	copyDefaults(value: boolean): ConfigurationOptions;
	copyDefaults(value: boolean): FileConfigurationOptions;
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	copyDefaults(value: boolean): YamlConfigurationOptions;
	copyHeader(value: boolean): FileConfigurationOptions;
	copyHeader(value: boolean): YamlConfigurationOptions;
	indent(): number;
	indent(value: number): YamlConfigurationOptions;
	configuration(): YamlConfiguration;
	configuration(): Configuration;
	configuration(): FileConfiguration;
	configuration(): MemoryConfiguration;
	pathSeparator(value: string): MemoryConfigurationOptions;
	pathSeparator(value: string): ConfigurationOptions;
	pathSeparator(value: string): FileConfigurationOptions;
	pathSeparator(value: string): YamlConfigurationOptions;
	header(): string;
	copyHeader(): boolean;
	copyDefaults(): boolean;
	pathSeparator(): string;
}

export default class YamlConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.YamlConfigurationOptions');
	}
}

