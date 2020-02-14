declare var Java: any;
import ClickableItem from '../../../../fr/minuskube/inv/ClickableItem.js'
import SlotPos from '../../../../fr/minuskube/inv/content/SlotPos.js'

export default interface SlotIterator {
	ended(): boolean;
	started(): boolean;
	row(): number;
	row(arg0: number): SlotIterator;
	column(arg0: number): SlotIterator;
	column(): number;
	doesAllowOverride(): boolean;
	blacklist(arg0: number, arg1: number): SlotIterator;
	blacklist(arg0: SlotPos): SlotIterator;
	allowOverride(arg0: boolean): SlotIterator;
	get(): any;
	next(): SlotIterator;
	set(arg0: ClickableItem): SlotIterator;
	previous(): SlotIterator;
}

export default class SlotIterator {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.SlotIterator');
	}
}

