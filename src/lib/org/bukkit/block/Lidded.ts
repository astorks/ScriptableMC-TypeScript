declare var Java: any;

export default interface Lidded {
	close(): void;
	open(): void;
}

export default class Lidded {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Lidded');
	}

}

