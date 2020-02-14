declare var Java: any;
import MinecraftVersion from '../../../com/smc/version/MinecraftVersion.js'

export default interface MinecraftVersions {
}

export default class MinecraftVersions {
	public static get $javaClass(): any {
		return Java.type('com.smc.version.MinecraftVersions');
	}
	public static get v1_15(): MinecraftVersion {
		return MinecraftVersions.$javaClass.v1_15;
	}
	public static get v1_14(): MinecraftVersion {
		return MinecraftVersions.$javaClass.v1_14;
	}
	public static get v1_13(): MinecraftVersion {
		return MinecraftVersions.$javaClass.v1_13;
	}
	public static get v1_12(): MinecraftVersion {
		return MinecraftVersions.$javaClass.v1_12;
	}
	public static get v1_11(): MinecraftVersion {
		return MinecraftVersions.$javaClass.v1_11;
	}
	public static get v1_10(): MinecraftVersion {
		return MinecraftVersions.$javaClass.v1_10;
	}
	public static get v1_9(): MinecraftVersion {
		return MinecraftVersions.$javaClass.v1_9;
	}
	public static get v1_8(): MinecraftVersion {
		return MinecraftVersions.$javaClass.v1_8;
	}
	public static get v1_7_8(): MinecraftVersion {
		return MinecraftVersions.$javaClass.v1_7_8;
	}
	public static get v1_7_2(): MinecraftVersion {
		return MinecraftVersions.$javaClass.v1_7_2;
	}
	public static get v1_6_1(): MinecraftVersion {
		return MinecraftVersions.$javaClass.v1_6_1;
	}
	public static get v1_5_0(): MinecraftVersion {
		return MinecraftVersions.$javaClass.v1_5_0;
	}
	public static get v1_4_2(): MinecraftVersion {
		return MinecraftVersions.$javaClass.v1_4_2;
	}
	public static get RUNTIME_VERSION(): MinecraftVersion {
		return MinecraftVersions.$javaClass.RUNTIME_VERSION;
	}
}

