declare var Java: any;

export default interface Cat$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Cat$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Cat$Type');
	}

	public static get ALL_BLACK(): Cat$Type {
		return this.$javaClass.ALL_BLACK;
	}
	public static get BLACK(): Cat$Type {
		return this.$javaClass.BLACK;
	}
	public static get BRITISH_SHORTHAIR(): Cat$Type {
		return this.$javaClass.BRITISH_SHORTHAIR;
	}
	public static get CALICO(): Cat$Type {
		return this.$javaClass.CALICO;
	}
	public static get JELLIE(): Cat$Type {
		return this.$javaClass.JELLIE;
	}
	public static get PERSIAN(): Cat$Type {
		return this.$javaClass.PERSIAN;
	}
	public static get RAGDOLL(): Cat$Type {
		return this.$javaClass.RAGDOLL;
	}
	public static get RED(): Cat$Type {
		return this.$javaClass.RED;
	}
	public static get SIAMESE(): Cat$Type {
		return this.$javaClass.SIAMESE;
	}
	public static get TABBY(): Cat$Type {
		return this.$javaClass.TABBY;
	}
	public static get WHITE(): Cat$Type {
		return this.$javaClass.WHITE;
	}
}

