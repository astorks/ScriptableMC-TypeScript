declare var Java: any;
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import PersistentDataAdapterContext from './PersistentDataAdapterContext.js'
import PersistentDataType from './PersistentDataType.js'

export default interface PersistentDataContainer {
	get(arg0: NamespacedKey, arg1: PersistentDataType): any;
	getAdapterContext(): PersistentDataAdapterContext;
	getKeys(): any;
	getOrDefault(arg0: NamespacedKey, arg1: PersistentDataType, arg2: any): any;
	has(arg0: NamespacedKey, arg1: PersistentDataType): boolean;
	isEmpty(): boolean;
	remove(arg0: NamespacedKey): void;
	set(arg0: NamespacedKey, arg1: PersistentDataType, arg2: any): void;
}

export default class PersistentDataContainer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.persistence.PersistentDataContainer');
	}

}

