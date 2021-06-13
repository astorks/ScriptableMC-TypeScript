declare var Java: any;

export default interface FaceAttachable$AttachedFace {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class FaceAttachable$AttachedFace {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.FaceAttachable$AttachedFace');
	}

	public static get CEILING(): FaceAttachable$AttachedFace {
		return this.$javaClass.CEILING;
	}
	public static get FLOOR(): FaceAttachable$AttachedFace {
		return this.$javaClass.FLOOR;
	}
	public static get WALL(): FaceAttachable$AttachedFace {
		return this.$javaClass.WALL;
	}
	public static valueOf(arg0: string): FaceAttachable$AttachedFace;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return FaceAttachable$AttachedFace.$javaClass.valueOf(...args);
	}

	public static values(): Array<FaceAttachable$AttachedFace>;
	public static values(...args: any[]): any {
		return FaceAttachable$AttachedFace.$javaClass.values(...args);
	}

}

