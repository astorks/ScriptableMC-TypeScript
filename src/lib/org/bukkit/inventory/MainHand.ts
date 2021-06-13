declare var Java: any;

export default interface MainHand {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static valueOf(arg0: string): MainHand;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return MainHand.$javaClass.valueOf(...args);
	}

	public static values(): Array<MainHand>;
	public static values(...args: any[]): any {
		return MainHand.$javaClass.values(...args);
	}

}

