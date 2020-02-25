declare var Java: any;

export default interface MainHand {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class MainHand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.MainHand');
	}

	public static get LEFT(): MainHand {
		return this.$javaClass.LEFT;
	}
	public static get RIGHT(): MainHand {
		return this.$javaClass.RIGHT;
	}
}

