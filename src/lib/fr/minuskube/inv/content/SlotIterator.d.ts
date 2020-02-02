import ClickableItem from '../../../../fr/minuskube/inv/ClickableItem.js';
import SlotPos from '../../../../fr/minuskube/inv/content/SlotPos.js';
export default interface SlotIterator {
    ended(): boolean;
    started(): boolean;
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
export default class SlotIterator {
    static get $javaClass(): any;
}
