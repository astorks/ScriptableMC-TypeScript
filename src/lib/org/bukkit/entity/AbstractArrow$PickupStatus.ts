declare var Java: any;

export default interface AbstractArrow$PickupStatus {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class AbstractArrow$PickupStatus {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.AbstractArrow$PickupStatus');
	}

	public static get ALLOWED(): AbstractArrow$PickupStatus {
		return this.$javaClass.ALLOWED;
	}
	public static get CREATIVE_ONLY(): AbstractArrow$PickupStatus {
		return this.$javaClass.CREATIVE_ONLY;
	}
	public static get DISALLOWED(): AbstractArrow$PickupStatus {
		return this.$javaClass.DISALLOWED;
	}
}

