declare var Java: any;

export default interface LazyMetadataValue$CacheStrategy {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class LazyMetadataValue$CacheStrategy {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.metadata.LazyMetadataValue$CacheStrategy');
	}

	public static get CACHE_AFTER_FIRST_EVAL(): LazyMetadataValue$CacheStrategy {
		return this.$javaClass.CACHE_AFTER_FIRST_EVAL;
	}
	public static get CACHE_ETERNALLY(): LazyMetadataValue$CacheStrategy {
		return this.$javaClass.CACHE_ETERNALLY;
	}
	public static get NEVER_CACHE(): LazyMetadataValue$CacheStrategy {
		return this.$javaClass.NEVER_CACHE;
	}
	public static valueOf(arg0: string): LazyMetadataValue$CacheStrategy;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return LazyMetadataValue$CacheStrategy.$javaClass.valueOf(...args);
	}

	public static values(): Array<LazyMetadataValue$CacheStrategy>;
	public static values(...args: any[]): any {
		return LazyMetadataValue$CacheStrategy.$javaClass.values(...args);
	}

}

