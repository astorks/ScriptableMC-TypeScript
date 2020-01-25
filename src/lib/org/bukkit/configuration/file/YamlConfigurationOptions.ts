declare var Java: any;
import {FileConfigurationOptions} from '../../../../org/bukkit/configuration/file/FileConfigurationOptions.js'
import {ConfigurationOptions} from '../../../../org/bukkit/configuration/ConfigurationOptions.js'
import {MemoryConfigurationOptions} from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js'
import {FileConfiguration} from '../../../../org/bukkit/configuration/file/FileConfiguration.js'
import {Configuration} from '../../../../org/bukkit/configuration/Configuration.js'
import {MemoryConfiguration} from '../../../../org/bukkit/configuration/MemoryConfiguration.js'
import {YamlConfiguration} from '../../../../org/bukkit/configuration/file/YamlConfiguration.js'

export interface YamlConfigurationOptions extends FileConfigurationOptions {
	copyDefaults(value: boolean): FileConfigurationOptions;
	copyDefaults(value: boolean): YamlConfigurationOptions;
	copyDefaults(value: boolean): ConfigurationOptions;
	copyDefaults(value: boolean): MemoryConfigurationOptions;
	configuration(): FileConfiguration;
	configuration(): Configuration;
	configuration(): MemoryConfiguration;
	configuration(): YamlConfiguration;
	header(value: string): YamlConfigurationOptions;
	header(value: string): FileConfigurationOptions;
	copyHeader(value: boolean): YamlConfigurationOptions;
	copyHeader(value: boolean): FileConfigurationOptions;
	indent(value: number): YamlConfigurationOptions;
	indent(): number;
	pathSeparator(value: string): MemoryConfigurationOptions;
	pathSeparator(value: string): ConfigurationOptions;
	pathSeparator(value: string): FileConfigurationOptions;
	pathSeparator(value: string): YamlConfigurationOptions;
	header(): string;
	copyHeader(): boolean;
	copyDefaults(): boolean;
	pathSeparator(): string;
}

export class YamlConfigurationOptions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.YamlConfigurationOptions');
	}
}

