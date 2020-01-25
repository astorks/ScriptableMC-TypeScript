declare var Java: any;
import {Advancement} from '../../../org/bukkit/advancement/Advancement.js'

export interface AdvancementProgress {
	getAdvancement(): Advancement;
	getRemainingCriteria(): any;
	awardCriteria(arg0: string): boolean;
	isDone(): boolean;
	getAwardedCriteria(): any;
	revokeCriteria(arg0: string): boolean;
	getDateAwarded(arg0: string): any;
}

export class AdvancementProgress {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.advancement.AdvancementProgress');
	}
}

