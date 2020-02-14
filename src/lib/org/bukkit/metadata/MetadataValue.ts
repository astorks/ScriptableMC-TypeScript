declare var Java: any;
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface MetadataValue {
	asString(): string;
	asInt(): number;
	asBoolean(): boolean;
	asLong(): number;
	asDouble(): number;
	asFloat(): number;
	asByte(): number;
	asShort(): number;
	getOwningPlugin(): Plugin;
	invalidate(): void;
	value(): any;
}

export default class MetadataValue {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.MetadataValue');
	}
}

