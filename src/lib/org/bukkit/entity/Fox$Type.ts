declare var Java: any;

export default interface Fox$Type {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
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

