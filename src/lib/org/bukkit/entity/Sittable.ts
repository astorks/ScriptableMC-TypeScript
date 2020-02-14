declare var Java: any;

export default interface Sittable {
	isSitting(): boolean;
	setSitting(arg0: boolean): void;
}

export default class Sittable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Sittable');
	}

}

