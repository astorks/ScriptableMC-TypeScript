declare var Java: any;
import FileConfiguration from '../../../org/bukkit/configuration/file/FileConfiguration.js'
import ScriptEngineDebuggerConfig from '../../../com/pixlfox/scriptablemc/ScriptEngineDebuggerConfig.js'

export default interface ScriptEngineConfig {
	getAutoEnablePlugins(): boolean;
	getDebug(): boolean;
	getDebugger(): ScriptEngineDebuggerConfig;
	getExecuteCommandTemplate(): string;
	getExtractLibs(): boolean;
	getMainScriptFiles(): Array<string>;
	getRootScriptsFolder(): string;
	getScriptMimeType(): string;
	readConfigBoolean(path: string): boolean;
	readConfigBoolean(path: string, def: boolean): boolean;
	readConfigString(path: string): string;
	readConfigString(path: string, def: string): string;
	readConfigStringList(path: string): Array<string>;
	readConfigStringList(path: string, def: Array<any>): Array<string>;
}

export default class ScriptEngineConfig {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.ScriptEngineConfig');
	}

	constructor(config: FileConfiguration);
	constructor(...args: any[]) {
		return new ScriptEngineConfig.$javaClass(...args);
	}

	public static readConfigBoolean$default(arg0: ScriptEngineConfig, arg1: string, arg2: boolean, arg3: number, arg4: any): boolean;
	public static readConfigBoolean$default(...args: any[]): any {
		return ScriptEngineConfig.$javaClass.readConfigBoolean$default(...args);
	}

	public static readConfigString$default(arg0: ScriptEngineConfig, arg1: string, arg2: string, arg3: number, arg4: any): string;
	public static readConfigString$default(...args: any[]): any {
		return ScriptEngineConfig.$javaClass.readConfigString$default(...args);
	}

	public static readConfigStringList$default(arg0: ScriptEngineConfig, arg1: string, arg2: Array<any>, arg3: number, arg4: any): Array<any>;
	public static readConfigStringList$default(...args: any[]): any {
		return ScriptEngineConfig.$javaClass.readConfigStringList$default(...args);
	}

}

