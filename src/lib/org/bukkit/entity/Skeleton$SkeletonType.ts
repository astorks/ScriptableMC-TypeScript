declare var Java: any;

export default interface Skeleton$SkeletonType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static valueOf(arg0: string): Skeleton$SkeletonType;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Skeleton$SkeletonType.$javaClass.valueOf(...args);
	}

	public static values(): Array<Skeleton$SkeletonType>;
	public static values(...args: any[]): any {
		return Skeleton$SkeletonType.$javaClass.values(...args);
	}

}

