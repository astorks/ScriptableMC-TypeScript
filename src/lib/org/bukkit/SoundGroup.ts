declare var Java: any;
import Sound from './Sound.js'

export default interface SoundGroup {
	getBreakSound(): Sound;
	getFallSound(): Sound;
	getHitSound(): Sound;
	getPitch(): number;
	getPlaceSound(): Sound;
	getStepSound(): Sound;
	getVolume(): number;
}

export default class SoundGroup {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.SoundGroup');
	}

}

