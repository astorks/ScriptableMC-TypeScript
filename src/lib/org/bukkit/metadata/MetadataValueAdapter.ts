declare var Java: any;
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface MetadataValueAdapter extends MetadataValue {
	asBoolean(): boolean;
	asByte(): number;
	asDouble(): number;
	asFloat(): number;
	asInt(): number;
	asLong(): number;
	asShort(): number;
	asString(): string;
	getOwningPlugin(): Plugin;
	invalidate(): void;
	value(): any;
}

export default class MetadataValueAdapter {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.MetadataValueAdapter');
	}

}

