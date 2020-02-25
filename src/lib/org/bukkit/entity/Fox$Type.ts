declare var Java: any;

export default interface Fox$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Fox$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Fox$Type');
	}

	public static get RED(): Fox$Type {
		return this.$javaClass.RED;
	}
	public static get SNOW(): Fox$Type {
		return this.$javaClass.SNOW;
	}
}

