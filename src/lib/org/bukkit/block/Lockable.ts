declare var Java: any;

export default interface Lockable {
	isLocked(): boolean;
	getLock(): string;
	setLock(arg0: string): void;
}

export default class Lockable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Lockable');
	}
}

