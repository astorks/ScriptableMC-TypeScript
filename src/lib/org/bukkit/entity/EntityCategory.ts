declare var Java: any;

export default interface EntityCategory {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class EntityCategory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.EntityCategory');
	}

	public static get ARTHROPOD(): EntityCategory {
		return this.$javaClass.ARTHROPOD;
	}
	public static get ILLAGER(): EntityCategory {
		return this.$javaClass.ILLAGER;
	}
	public static get NONE(): EntityCategory {
		return this.$javaClass.NONE;
	}
	public static get UNDEAD(): EntityCategory {
		return this.$javaClass.UNDEAD;
	}
	public static get WATER(): EntityCategory {
		return this.$javaClass.WATER;
	}
	public static valueOf(arg0: string): EntityCategory;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return EntityCategory.$javaClass.valueOf(...args);
	}

	public static values(): Array<EntityCategory>;
	public static values(...args: any[]): any {
		return EntityCategory.$javaClass.values(...args);
	}

}

