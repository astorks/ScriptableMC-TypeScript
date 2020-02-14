declare var Java: any;

export default interface SlotPos {
	getColumn(): number;
	getRow(): number;
}

export default class SlotPos {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.SlotPos');
	}

	constructor(row: number, column: number);
	constructor(...args: any[]) {
		return new SlotPos.$javaClass(...args);
	}

	public static of(row: number, column: number): SlotPos;
	public static of(...args: any[]): any {
		return SlotPos.$javaClass.of(...args);
	}

}

