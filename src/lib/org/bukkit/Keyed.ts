declare var Java: any;
import NamespacedKey from '../../org/bukkit/NamespacedKey.js'

export default interface Keyed {
	getKey(): NamespacedKey;
}

export default class Keyed {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Keyed');
	}

}

