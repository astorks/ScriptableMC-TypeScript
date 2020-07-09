declare var Java: any;

export default interface FaceAttachable$AttachedFace {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

