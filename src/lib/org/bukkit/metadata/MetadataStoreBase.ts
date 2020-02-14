declare var Java: any;
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface MetadataStoreBase {
	setMetadata(subject: any, metadataKey: string, newMetadataValue: MetadataValue): void;
	getMetadata(subject: any, metadataKey: string): Array<MetadataValue>;
	hasMetadata(subject: any, metadataKey: string): boolean;
	removeMetadata(subject: any, metadataKey: string, owningPlugin: Plugin): void;
	invalidateAll(owningPlugin: Plugin): void;
}

export default class MetadataStoreBase {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.MetadataStoreBase');
	}
	constructor();
	constructor(...args: any[]) {
		return new MetadataStoreBase.$javaClass(...args);
	}
}

