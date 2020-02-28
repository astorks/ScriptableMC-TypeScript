declare var Java: any;
import NamespacedKey from './NamespacedKey.js'

export default interface Keyed {
	getKey(): NamespacedKey;
}

export default class Keyed {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Keyed');
	}

}

