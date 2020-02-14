declare var Java: any;

export default interface AnimalTamer {
	getName(): string;
	getUniqueId(): string;
}

export default class AnimalTamer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.AnimalTamer');
	}

}

