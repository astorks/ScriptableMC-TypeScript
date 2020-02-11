import ClickableItem from '../../../../fr/minuskube/inv/ClickableItem.js';
import SlotPos from '../../../../fr/minuskube/inv/content/SlotPos.js';
export default interface SlotIterator {
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
    column(): number;
    column(arg0: number): SlotIterator;
    doesAllowOverride(): boolean;
    allowOverride(arg0: boolean): SlotIterator;
}
export default class SlotIterator {
    static get $javaClass(): any;
}
