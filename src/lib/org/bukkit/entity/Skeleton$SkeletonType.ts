declare var Java: any;

export default interface Skeleton$SkeletonType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Skeleton$SkeletonType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Skeleton$SkeletonType');
	}

	public static get NORMAL(): Skeleton$SkeletonType {
		return this.$javaClass.NORMAL;
	}
	public static get STRAY(): Skeleton$SkeletonType {
		return this.$javaClass.STRAY;
	}
	public static get WITHER(): Skeleton$SkeletonType {
		return this.$javaClass.WITHER;
	}
}

