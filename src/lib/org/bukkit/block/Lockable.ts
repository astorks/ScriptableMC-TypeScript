declare var Java: any;

export default interface Lockable {
	getLock(): string;
	isLocked(): boolean;
	setLock(arg0: string): void;
}

export default class Lockable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Lockable');
	}

}

