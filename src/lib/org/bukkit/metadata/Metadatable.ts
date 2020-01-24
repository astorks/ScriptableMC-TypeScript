declare var Java: any;
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'

export interface Metadatable {
	hasMetadata(metadataKey: string): boolean;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
}

export class Metadatable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.Metadatable');
	}
}

