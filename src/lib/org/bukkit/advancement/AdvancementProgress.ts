declare var Java: any;
import Advancement from '../../../org/bukkit/advancement/Advancement.js'

export default interface AdvancementProgress {
	awardCriteria(arg0: string): boolean;
	getAdvancement(): Advancement;
	getAwardedCriteria(): any;
	getDateAwarded(arg0: string): any;
	getRemainingCriteria(): any;
	isDone(): boolean;
	revokeCriteria(arg0: string): boolean;
}

export default class AdvancementProgress {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.advancement.AdvancementProgress');
	}

}

