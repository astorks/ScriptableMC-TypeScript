declare var Java: any;

export default interface ServicePriority {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class ServicePriority {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.ServicePriority');
	}

	public static get High(): ServicePriority {
		return this.$javaClass.High;
	}
	public static get Highest(): ServicePriority {
		return this.$javaClass.Highest;
	}
	public static get Low(): ServicePriority {
		return this.$javaClass.Low;
	}
	public static get Lowest(): ServicePriority {
		return this.$javaClass.Lowest;
	}
	public static get Normal(): ServicePriority {
		return this.$javaClass.Normal;
	}
	public static valueOf(arg0: string): ServicePriority;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return ServicePriority.$javaClass.valueOf(...args);
	}

	public static values(): Array<ServicePriority>;
	public static values(...args: any[]): any {
		return ServicePriority.$javaClass.values(...args);
	}

}

