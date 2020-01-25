declare var Java: any;
import {SlotPos} from '../../../../fr/minuskube/inv/content/SlotPos.js'
import {ClickableItem} from '../../../../fr/minuskube/inv/ClickableItem.js'

export interface SlotIterator {
	started(): boolean;
	ended(): boolean;
	row(): number;
	row(arg0: number): SlotIterator;
	doesAllowOverride(): boolean;
	allowOverride(arg0: boolean): SlotIterator;
	blacklist(arg0: SlotPos): SlotIterator;
	blacklist(arg0: number, arg1: number): SlotIterator;
	column(arg0: number): SlotIterator;
	column(): number;
	get(): any;
	next(): SlotIterator;
	set(arg0: ClickableItem): SlotIterator;
	previous(): SlotIterator;
}

export class SlotIterator {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.SlotIterator');
	}
}

