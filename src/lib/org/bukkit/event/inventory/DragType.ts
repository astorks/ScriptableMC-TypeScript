declare var Java: any;

export default interface DragType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

