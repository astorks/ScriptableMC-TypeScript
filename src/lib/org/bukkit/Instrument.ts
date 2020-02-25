declare var Java: any;

export default interface Instrument {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	getType(): number;
	name(): string;
	ordinal(): number;
}

export default class Instrument {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Instrument');
	}

	public static get BANJO(): Instrument {
		return this.$javaClass.BANJO;
	}
	public static get BASS_DRUM(): Instrument {
		return this.$javaClass.BASS_DRUM;
	}
	public static get BASS_GUITAR(): Instrument {
		return this.$javaClass.BASS_GUITAR;
	}
	public static get BELL(): Instrument {
		return this.$javaClass.BELL;
	}
	public static get BIT(): Instrument {
		return this.$javaClass.BIT;
	}
	public static get CHIME(): Instrument {
		return this.$javaClass.CHIME;
	}
	public static get COW_BELL(): Instrument {
		return this.$javaClass.COW_BELL;
	}
	public static get DIDGERIDOO(): Instrument {
		return this.$javaClass.DIDGERIDOO;
	}
	public static get FLUTE(): Instrument {
		return this.$javaClass.FLUTE;
	}
	public static get GUITAR(): Instrument {
		return this.$javaClass.GUITAR;
	}
	public static get IRON_XYLOPHONE(): Instrument {
		return this.$javaClass.IRON_XYLOPHONE;
	}
	public static get PIANO(): Instrument {
		return this.$javaClass.PIANO;
	}
	public static get PLING(): Instrument {
		return this.$javaClass.PLING;
	}
	public static get SNARE_DRUM(): Instrument {
		return this.$javaClass.SNARE_DRUM;
	}
	public static get STICKS(): Instrument {
		return this.$javaClass.STICKS;
	}
	public static get XYLOPHONE(): Instrument {
		return this.$javaClass.XYLOPHONE;
	}
}

