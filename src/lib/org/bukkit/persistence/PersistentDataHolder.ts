declare var Java: any;
import PersistentDataContainer from './PersistentDataContainer.js'

export default interface PersistentDataHolder {
	getPersistentDataContainer(): PersistentDataContainer;
}

export default class PersistentDataHolder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.persistence.PersistentDataHolder');
	}

}

