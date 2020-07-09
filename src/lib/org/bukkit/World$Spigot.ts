declare var Java: any;
import LightningStrike from './entity/LightningStrike.js'
import Location from './Location.js'

export default interface World$Spigot {
	strikeLightning(loc: Location, isSilent: boolean): LightningStrike;
	strikeLightningEffect(loc: Location, isSilent: boolean): LightningStrike;
}

export default class World$Spigot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.World$Spigot');
	}

	constructor();
	constructor(...args: any[]) {
		return new World$Spigot.$javaClass(...args);
	}

}

