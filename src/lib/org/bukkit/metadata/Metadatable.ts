declare var Java: any;
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface Metadatable {
	getMetadata(arg0: string): Array<MetadataValue>;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
}

export default class Metadatable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.Metadatable');
	}

}

