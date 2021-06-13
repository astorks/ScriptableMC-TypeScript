declare var Java: any;

export default interface Difficulty {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	getValue(): number;
	name(): string;
	ordinal(): number;
}

export default class Difficulty {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Difficulty');
	}

	public static get EASY(): Difficulty {
		return this.$javaClass.EASY;
	}
	public static get HARD(): Difficulty {
		return this.$javaClass.HARD;
	}
	public static get NORMAL(): Difficulty {
		return this.$javaClass.NORMAL;
	}
	public static get PEACEFUL(): Difficulty {
		return this.$javaClass.PEACEFUL;
	}
	public static getByValue(value: number): Difficulty;
	public static getByValue(...args: any[]): any {
		return Difficulty.$javaClass.getByValue(...args);
	}

	public static valueOf(arg0: string): Difficulty;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Difficulty.$javaClass.valueOf(...args);
	}

	public static values(): Array<Difficulty>;
	public static values(...args: any[]): any {
		return Difficulty.$javaClass.values(...args);
	}

}

