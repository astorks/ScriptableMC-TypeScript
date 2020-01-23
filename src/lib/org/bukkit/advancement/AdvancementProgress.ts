declare var Java: any;
import {Advancement} from '../../../org/bukkit/advancement/Advancement.js'

export interface AdvancementProgress {
	isDone(): boolean;
	getAdvancement(): Advancement;
	getRemainingCriteria(): any;
	revokeCriteria(criteria: string): boolean;
	getDateAwarded(criteria: string): any;
	getAwardedCriteria(): any;
	awardCriteria(criteria: string): boolean;
}

export class AdvancementProgress {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.advancement.AdvancementProgress');
	}
}

