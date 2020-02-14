declare var Java: any;

export default interface World$Environment {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	getId(): number;
	name(): string;
	ordinal(): number;
}

export default class World$Environment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.World$Environment');
	}

	public static get NETHER(): World$Environment {
		return this.$javaClass.NETHER;
	}
	public static get NORMAL(): World$Environment {
		return this.$javaClass.NORMAL;
	}
	public static get THE_END(): World$Environment {
		return this.$javaClass.THE_END;
	}
}

