declare var Java: any;

export default interface Repairable {
	hasRepairCost(): boolean;
	getRepairCost(): number;
	setRepairCost(arg0: number): void;
	clone(): Repairable;
	clone(): any;
}

export default class Repairable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.Repairable');
	}
}

