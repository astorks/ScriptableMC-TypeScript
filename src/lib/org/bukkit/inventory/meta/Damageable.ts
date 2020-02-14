declare var Java: any;

export default interface Damageable {
	setDamage(arg0: number): void;
	getDamage(): number;
	hasDamage(): boolean;
	clone(): Damageable;
	clone(): any;
}

export default class Damageable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.Damageable');
	}
}

