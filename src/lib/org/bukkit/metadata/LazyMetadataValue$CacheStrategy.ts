declare var Java: any;

export default interface LazyMetadataValue$CacheStrategy {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class LazyMetadataValue$CacheStrategy {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.LazyMetadataValue$CacheStrategy');
	}

	public static get CACHE_AFTER_FIRST_EVAL(): LazyMetadataValue$CacheStrategy {
		return this.$javaClass.CACHE_AFTER_FIRST_EVAL;
	}
	public static get NEVER_CACHE(): LazyMetadataValue$CacheStrategy {
		return this.$javaClass.NEVER_CACHE;
	}
	public static get CACHE_ETERNALLY(): LazyMetadataValue$CacheStrategy {
		return this.$javaClass.CACHE_ETERNALLY;
	}
}

