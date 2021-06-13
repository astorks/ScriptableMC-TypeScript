declare var Java: any;

export default interface DragType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class DragType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.DragType');
	}

	public static get EVEN(): DragType {
		return this.$javaClass.EVEN;
	}
	public static get SINGLE(): DragType {
		return this.$javaClass.SINGLE;
	}
	public static valueOf(arg0: string): DragType;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return DragType.$javaClass.valueOf(...args);
	}

	public static values(): Array<DragType>;
	public static values(...args: any[]): any {
		return DragType.$javaClass.values(...args);
	}

}

