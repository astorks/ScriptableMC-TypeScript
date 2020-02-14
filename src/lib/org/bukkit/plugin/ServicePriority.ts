declare var Java: any;

export default interface ServicePriority {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

