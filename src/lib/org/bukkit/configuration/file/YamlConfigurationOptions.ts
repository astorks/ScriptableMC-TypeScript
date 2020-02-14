declare var Java: any;
import Configuration from '../../../../org/bukkit/configuration/Configuration.js'
import ConfigurationOptions from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import FileConfiguration from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import FileConfigurationOptions from '../../../../org/bukkit/configuration/file/FileConfigurationOptions.js'
import MemoryConfiguration from '../../../../org/bukkit/configuration/MemoryConfiguration.js'
import MemoryConfigurationOptions from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import YamlConfiguration from '../../../../org/bukkit/configuration/file/YamlConfiguration.js'

export default interface YamlConfigurationOptions extends FileConfigurationOptions {
	configuration(): Configuration;
	configuration(): MemoryConfiguration;
	configuration(): FileConfiguration;
	configuration(): YamlConfiguration;
	copyDefaults(): boolean;
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	copyDefaults(value: boolean): YamlConfigurationOptions;
	copyDefaults(value: boolean): FileConfigurationOptions;
	copyDefaults(value: boolean): ConfigurationOptions;
	copyHeader(): boolean;
	copyHeader(value: boolean): FileConfigurationOptions;
	copyHeader(value: boolean): YamlConfigurationOptions;
	header(): string;
	header(value: string): FileConfigurationOptions;
	header(value: string): YamlConfigurationOptions;
	indent(): number;
	indent(value: number): YamlConfigurationOptions;
	pathSeparator(): string;
	pathSeparator(value: string): ConfigurationOptions;
	pathSeparator(value: string): MemoryConfigurationOptions;
	pathSeparator(value: string): FileConfigurationOptions;
	pathSeparator(value: string): YamlConfigurationOptions;
}

export default class YamlConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.YamlConfigurationOptions');
	}

}

