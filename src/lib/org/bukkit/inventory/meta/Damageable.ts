declare var Java: any;

export default interface Damageable {
	clone(): Damageable;
	clone(): any;
	getDamage(): number;
	hasDamage(): boolean;
	setDamage(arg0: number): void;
}

export default class Damageable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.Damageable');
	}

}

