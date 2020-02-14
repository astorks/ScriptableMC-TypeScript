declare var Java: any;

export default interface Note$Tone {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	getId(): number;
	getId(sharped: boolean): number;
	isSharpable(): boolean;
	isSharped(id: number): boolean;
	name(): string;
	ordinal(): number;
}

export default class Note$Tone {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Note$Tone');
	}

	public static get A(): Note$Tone {
		return this.$javaClass.A;
	}
	public static get B(): Note$Tone {
		return this.$javaClass.B;
	}
	public static get C(): Note$Tone {
		return this.$javaClass.C;
	}
	public static get D(): Note$Tone {
		return this.$javaClass.D;
	}
	public static get E(): Note$Tone {
		return this.$javaClass.E;
	}
	public static get F(): Note$Tone {
		return this.$javaClass.F;
	}
	public static get G(): Note$Tone {
		return this.$javaClass.G;
	}
}

