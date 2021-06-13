declare var Java: any;

export default interface PistonMoveReaction {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	getId(): number;
	name(): string;
	ordinal(): number;
}

export default class PistonMoveReaction {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.PistonMoveReaction');
	}

	public static get BLOCK(): PistonMoveReaction {
		return this.$javaClass.BLOCK;
	}
	public static get BREAK(): PistonMoveReaction {
		return this.$javaClass.BREAK;
	}
	public static get IGNORE(): PistonMoveReaction {
		return this.$javaClass.IGNORE;
	}
	public static get MOVE(): PistonMoveReaction {
		return this.$javaClass.MOVE;
	}
	public static get PUSH_ONLY(): PistonMoveReaction {
		return this.$javaClass.PUSH_ONLY;
	}
	public static getById(id: number): PistonMoveReaction;
	public static getById(...args: any[]): any {
		return PistonMoveReaction.$javaClass.getById(...args);
	}

	public static valueOf(arg0: string): PistonMoveReaction;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return PistonMoveReaction.$javaClass.valueOf(...args);
	}

	public static values(): Array<PistonMoveReaction>;
	public static values(...args: any[]): any {
		return PistonMoveReaction.$javaClass.values(...args);
	}

}

