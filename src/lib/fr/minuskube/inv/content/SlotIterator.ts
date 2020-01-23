declare var Java: any;
import {ClickableItem} from '../../../../fr/minuskube/inv/ClickableItem.js'
import {SlotPos} from '../../../../fr/minuskube/inv/content/SlotPos.js'

export interface SlotIterator {
	get(): any;
	next(): SlotIterator;
	set(arg0: ClickableItem): SlotIterator;
	started(): boolean;
	previous(): SlotIterator;
	row(arg0: number): SlotIterator;
	row(): number;
	blacklist(arg0: number, arg1: number): SlotIterator;
	blacklist(arg0: SlotPos): SlotIterator;
	ended(): boolean;
	doesAllowOverride(): boolean;
	allowOverride(arg0: boolean): SlotIterator;
	column(arg0: number): SlotIterator;
	column(): number;
}

export class SlotIterator {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.SlotIterator');
	}
}

