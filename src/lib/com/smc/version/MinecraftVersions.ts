declare var Java: any;
import Version from '../../../com/smc/version/Version.js'

export default class MinecraftVersions {
	public static get $javaClass(): any {
		return Java.type('com.smc.version.MinecraftVersions');
	}

	public static get RUNTIME_VERSION(): Version {
		return MinecraftVersions.$javaClass.RUNTIME_VERSION;
	}

	public static get v1_10(): Version {
		return MinecraftVersions.$javaClass.v1_10;
	}

	public static get v1_11(): Version {
		return MinecraftVersions.$javaClass.v1_11;
	}

	public static get v1_12(): Version {
		return MinecraftVersions.$javaClass.v1_12;
	}

	public static get v1_13(): Version {
		return MinecraftVersions.$javaClass.v1_13;
	}

	public static get v1_14(): Version {
		return MinecraftVersions.$javaClass.v1_14;
	}

	public static get v1_15(): Version {
		return MinecraftVersions.$javaClass.v1_15;
	}

	public static get v1_4_2(): Version {
		return MinecraftVersions.$javaClass.v1_4_2;
	}

	public static get v1_5_0(): Version {
		return MinecraftVersions.$javaClass.v1_5_0;
	}

	public static get v1_6_1(): Version {
		return MinecraftVersions.$javaClass.v1_6_1;
	}

	public static get v1_7_2(): Version {
		return MinecraftVersions.$javaClass.v1_7_2;
	}

	public static get v1_7_8(): Version {
		return MinecraftVersions.$javaClass.v1_7_8;
	}

	public static get v1_8(): Version {
		return MinecraftVersions.$javaClass.v1_8;
	}

	public static get v1_9(): Version {
		return MinecraftVersions.$javaClass.v1_9;
	}

	public static access$getVERSION_PATTERN$cp(): any;
	public static access$getVERSION_PATTERN$cp(...args: any[]): any {
		return MinecraftVersions.$javaClass.access$getVERSION_PATTERN$cp(...args);
	}

}

