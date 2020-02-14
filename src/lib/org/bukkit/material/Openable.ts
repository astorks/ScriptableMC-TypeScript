declare var Java: any;

export default interface Openable {
	isOpen(): boolean;
	setOpen(arg0: boolean): void;
}

export default class Openable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Openable');
	}

}

