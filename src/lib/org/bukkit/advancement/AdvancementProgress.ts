declare var Java: any;
import {Advancement} from '../../../org/bukkit/advancement/Advancement.js'

export interface AdvancementProgress {
	isDone(): boolean;
	getAdvancement(): Advancement;
	getDateAwarded(criteria: string): any;
	getAwardedCriteria(): any;
	revokeCriteria(criteria: string): boolean;
	awardCriteria(criteria: string): boolean;
	getRemainingCriteria(): any;
}

export class AdvancementProgress {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.advancement.AdvancementProgress');
	}
}

