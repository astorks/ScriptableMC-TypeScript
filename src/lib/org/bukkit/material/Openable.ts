declare var Java: any;

export default interface Openable {
	setOpen(arg0: boolean): void;
	isOpen(): boolean;
}

export default class Openable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Openable');
	}
}

