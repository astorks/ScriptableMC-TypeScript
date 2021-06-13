declare var Java: any;

export default interface Panda$Gene {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	isRecessive(): boolean;
	name(): string;
	ordinal(): number;
}

export default class Panda$Gene {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Panda$Gene');
	}

	public static get AGGRESSIVE(): Panda$Gene {
		return this.$javaClass.AGGRESSIVE;
	}
	public static get BROWN(): Panda$Gene {
		return this.$javaClass.BROWN;
	}
	public static get LAZY(): Panda$Gene {
		return this.$javaClass.LAZY;
	}
	public static get NORMAL(): Panda$Gene {
		return this.$javaClass.NORMAL;
	}
	public static get PLAYFUL(): Panda$Gene {
		return this.$javaClass.PLAYFUL;
	}
	public static get WEAK(): Panda$Gene {
		return this.$javaClass.WEAK;
	}
	public static get WORRIED(): Panda$Gene {
		return this.$javaClass.WORRIED;
	}
	public static valueOf(arg0: string): Panda$Gene;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Panda$Gene.$javaClass.valueOf(...args);
	}

	public static values(): Array<Panda$Gene>;
	public static values(...args: any[]): any {
		return Panda$Gene.$javaClass.values(...args);
	}

}

