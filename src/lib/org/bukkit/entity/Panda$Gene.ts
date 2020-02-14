declare var Java: any;

export default interface Panda$Gene {
	isRecessive(): boolean;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Panda$Gene {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Panda$Gene');
	}

	public static get NORMAL(): Panda$Gene {
		return this.$javaClass.NORMAL;
	}
	public static get LAZY(): Panda$Gene {
		return this.$javaClass.LAZY;
	}
	public static get WORRIED(): Panda$Gene {
		return this.$javaClass.WORRIED;
	}
	public static get PLAYFUL(): Panda$Gene {
		return this.$javaClass.PLAYFUL;
	}
	public static get BROWN(): Panda$Gene {
		return this.$javaClass.BROWN;
	}
	public static get WEAK(): Panda$Gene {
		return this.$javaClass.WEAK;
	}
	public static get AGGRESSIVE(): Panda$Gene {
		return this.$javaClass.AGGRESSIVE;
	}
}

