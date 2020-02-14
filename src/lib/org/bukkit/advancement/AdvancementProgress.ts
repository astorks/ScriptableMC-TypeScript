declare var Java: any;
import Advancement from '../../../org/bukkit/advancement/Advancement.js'

export default interface AdvancementProgress {
	isDone(): boolean;
	getAdvancement(): Advancement;
	getRemainingCriteria(): any;
	revokeCriteria(arg0: string): boolean;
	getDateAwarded(arg0: string): any;
	getAwardedCriteria(): any;
	awardCriteria(arg0: string): boolean;
}

export default class AdvancementProgress {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.advancement.AdvancementProgress');
	}
}

