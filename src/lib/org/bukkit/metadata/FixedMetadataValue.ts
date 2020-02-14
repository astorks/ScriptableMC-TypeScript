declare var Java: any;
import LazyMetadataValue from '../../../org/bukkit/metadata/LazyMetadataValue.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface FixedMetadataValue extends LazyMetadataValue {
	invalidate(): void;
	value(): any;
	asString(): string;
	asInt(): number;
	asBoolean(): boolean;
	asLong(): number;
	asDouble(): number;
	asFloat(): number;
	asByte(): number;
	asShort(): number;
	getOwningPlugin(): Plugin;
}

export default class FixedMetadataValue {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.FixedMetadataValue');
	}
	constructor(owningPlugin: Plugin, value: any);
	constructor(...args: any[]) {
		return new FixedMetadataValue.$javaClass(...args);
	}
}

