declare var Java: any;

export default interface GameMode {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	getValue(): number;
	name(): string;
	ordinal(): number;
}

export default class GameMode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.GameMode');
	}

	public static get ADVENTURE(): GameMode {
		return this.$javaClass.ADVENTURE;
	}
	public static get CREATIVE(): GameMode {
		return this.$javaClass.CREATIVE;
	}
	public static get SPECTATOR(): GameMode {
		return this.$javaClass.SPECTATOR;
	}
	public static get SURVIVAL(): GameMode {
		return this.$javaClass.SURVIVAL;
	}
	public static getByValue(value: number): GameMode;
	public static getByValue(...args: any[]): any {
		return GameMode.$javaClass.getByValue(...args);
	}

	public static valueOf(arg0: string): GameMode;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return GameMode.$javaClass.valueOf(...args);
	}

	public static values(): Array<GameMode>;
	public static values(...args: any[]): any {
		return GameMode.$javaClass.values(...args);
	}

}

