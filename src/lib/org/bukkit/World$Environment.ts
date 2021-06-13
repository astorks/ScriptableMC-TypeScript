declare var Java: any;

export default interface World$Environment {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	getId(): number;
	name(): string;
	ordinal(): number;
}

export default class World$Environment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.World$Environment');
	}

	public static get CUSTOM(): World$Environment {
		return this.$javaClass.CUSTOM;
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
	public static getEnvironment(id: number): World$Environment;
	public static getEnvironment(...args: any[]): any {
		return World$Environment.$javaClass.getEnvironment(...args);
	}

	public static valueOf(arg0: string): World$Environment;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return World$Environment.$javaClass.valueOf(...args);
	}

	public static values(): Array<World$Environment>;
	public static values(...args: any[]): any {
		return World$Environment.$javaClass.values(...args);
	}

}

