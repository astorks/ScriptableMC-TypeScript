declare var Java: any;
import ScriptEngineConfig from '../../../com/pixlfox/scriptablemc/ScriptEngineConfig.js'

export default interface ScriptEngineDebuggerConfig {
	getAddress(): string;
	getEnabled(): boolean;
	getWaitAttached(): boolean;
}

export default class ScriptEngineDebuggerConfig {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.ScriptEngineDebuggerConfig');
	}

	constructor(config: ScriptEngineConfig);
	constructor(...args: any[]) {
		return new ScriptEngineDebuggerConfig.$javaClass(...args);
	}

}

