declare var Java: any;

export default interface Mirror {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Mirror {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.structure.Mirror');
	}

	public static get NONE(): Mirror {
		return this.$javaClass.NONE;
	}
	public static get LEFT_RIGHT(): Mirror {
		return this.$javaClass.LEFT_RIGHT;
	}
	public static get FRONT_BACK(): Mirror {
		return this.$javaClass.FRONT_BACK;
	}
}

