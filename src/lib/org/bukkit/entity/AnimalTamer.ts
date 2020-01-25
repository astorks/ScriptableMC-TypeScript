declare var Java: any;

export interface AnimalTamer {
	getUniqueId(): string;
	getName(): string;
}

export class AnimalTamer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.AnimalTamer');
	}
}

