declare var Java: any;
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface MetadataStore {
	getMetadata(arg0: any, arg1: string): Array<MetadataValue>;
	hasMetadata(arg0: any, arg1: string): boolean;
	invalidateAll(arg0: Plugin): void;
	removeMetadata(arg0: any, arg1: string, arg2: Plugin): void;
	setMetadata(arg0: any, arg1: string, arg2: MetadataValue): void;
}

export default class MetadataStore {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.MetadataStore');
	}

}

