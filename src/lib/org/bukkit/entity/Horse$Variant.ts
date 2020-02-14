declare var Java: any;

export default interface Horse$Variant {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Horse$Variant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Horse$Variant');
	}

	public static get DONKEY(): Horse$Variant {
		return this.$javaClass.DONKEY;
	}
	public static get HORSE(): Horse$Variant {
		return this.$javaClass.HORSE;
	}
	public static get LLAMA(): Horse$Variant {
		return this.$javaClass.LLAMA;
	}
	public static get MULE(): Horse$Variant {
		return this.$javaClass.MULE;
	}
	public static get SKELETON_HORSE(): Horse$Variant {
		return this.$javaClass.SKELETON_HORSE;
	}
	public static get UNDEAD_HORSE(): Horse$Variant {
		return this.$javaClass.UNDEAD_HORSE;
	}
}

