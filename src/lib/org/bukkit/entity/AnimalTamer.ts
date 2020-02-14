declare var Java: any;

export default interface AnimalTamer {
	getUniqueId(): string;
	getName(): string;
}

export default class AnimalTamer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.AnimalTamer');
	}
}

