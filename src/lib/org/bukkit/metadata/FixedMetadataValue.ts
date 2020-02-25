declare var Java: any;
import LazyMetadataValue from '../../../org/bukkit/metadata/LazyMetadataValue.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface FixedMetadataValue extends LazyMetadataValue {
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

export default class FixedMetadataValue {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.FixedMetadataValue');
	}

	constructor(owningPlugin: Plugin, value: any);
	constructor(...args: any[]) {
		return new FixedMetadataValue.$javaClass(...args);
	}

}

