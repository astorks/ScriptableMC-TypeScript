declare var Java: any;

export default interface SlotIterator$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class SlotIterator$Type {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.SlotIterator$Type');
	}

	public static get HORIZONTAL(): SlotIterator$Type {
		return this.$javaClass.HORIZONTAL;
	}
	public static get VERTICAL(): SlotIterator$Type {
		return this.$javaClass.VERTICAL;
	}
	public static valueOf(_name: string): SlotIterator$Type;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return SlotIterator$Type.$javaClass.valueOf(...args);
	}

	public static values(): Array<SlotIterator$Type>;
	public static values(...args: any[]): any {
		return SlotIterator$Type.$javaClass.values(...args);
	}

}

