declare var Java: any;

export default interface SoundCategory {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class SoundCategory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.SoundCategory');
	}

	public static get AMBIENT(): SoundCategory {
		return this.$javaClass.AMBIENT;
	}
	public static get BLOCKS(): SoundCategory {
		return this.$javaClass.BLOCKS;
	}
	public static get HOSTILE(): SoundCategory {
		return this.$javaClass.HOSTILE;
	}
	public static get MASTER(): SoundCategory {
		return this.$javaClass.MASTER;
	}
	public static get MUSIC(): SoundCategory {
		return this.$javaClass.MUSIC;
	}
	public static get NEUTRAL(): SoundCategory {
		return this.$javaClass.NEUTRAL;
	}
	public static get PLAYERS(): SoundCategory {
		return this.$javaClass.PLAYERS;
	}
	public static get RECORDS(): SoundCategory {
		return this.$javaClass.RECORDS;
	}
	public static get VOICE(): SoundCategory {
		return this.$javaClass.VOICE;
	}
	public static get WEATHER(): SoundCategory {
		return this.$javaClass.WEATHER;
	}
	public static valueOf(arg0: string): SoundCategory;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return SoundCategory.$javaClass.valueOf(...args);
	}

	public static values(): Array<SoundCategory>;
	public static values(...args: any[]): any {
		return SoundCategory.$javaClass.values(...args);
	}

}

