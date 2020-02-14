declare var Java: any;
import LazyMetadataValue$CacheStrategy from '../../../org/bukkit/metadata/LazyMetadataValue$CacheStrategy.js'
import MetadataValueAdapter from '../../../org/bukkit/metadata/MetadataValueAdapter.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface LazyMetadataValue extends MetadataValueAdapter {
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

export default class LazyMetadataValue {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.LazyMetadataValue');
	}

	constructor(owningPlugin: Plugin, lazyValue: any);
	constructor(owningPlugin: Plugin, cacheStrategy: LazyMetadataValue$CacheStrategy, lazyValue: any);
	constructor(...args: any[]) {
		return new LazyMetadataValue.$javaClass(...args);
	}

}

