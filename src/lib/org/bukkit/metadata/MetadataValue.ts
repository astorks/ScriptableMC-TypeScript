declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface MetadataValue {
	value(): any;
	asString(): string;
	asInt(): number;
	asBoolean(): boolean;
	asFloat(): number;
	asLong(): number;
	asDouble(): number;
	asByte(): number;
	asShort(): number;
	invalidate(): void;
	getOwningPlugin(): Plugin;
}

export class MetadataValue {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.MetadataValue');
	}
}

