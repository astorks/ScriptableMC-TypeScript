declare var Java: any;
import BossBar from './BossBar.js'
import DragonBattle$RespawnPhase from './DragonBattle$RespawnPhase.js'
import EnderDragon from '../../../org/bukkit/entity/EnderDragon.js'
import Location from '../../../org/bukkit/Location.js'

export default interface DragonBattle {
	generateEndPortal(arg0: boolean): boolean;
	getBossBar(): BossBar;
	getEndPortalLocation(): Location;
	getEnderDragon(): EnderDragon;
	getRespawnPhase(): DragonBattle$RespawnPhase;
	hasBeenPreviouslyKilled(): boolean;
	initiateRespawn(): void;
	resetCrystals(): void;
	setRespawnPhase(arg0: DragonBattle$RespawnPhase): boolean;
}

export default class DragonBattle {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.DragonBattle');
	}

}

