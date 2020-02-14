declare var Java: any;

export default interface Listener {
}

export default class Listener {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.Listener');
	}
}

