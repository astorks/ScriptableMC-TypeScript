import { SlotPos } from '../../../../fr/minuskube/inv/content/SlotPos.js';
import { ClickableItem } from '../../../../fr/minuskube/inv/ClickableItem.js';
export interface SlotIterator {
    started(): boolean;
    ended(): boolean;
    row(arg0: number): SlotIterator;
    row(): number;
    column(): number;
    column(arg0: number): SlotIterator;
    doesAllowOverride(): boolean;
    allowOverride(arg0: boolean): SlotIterator;
    blacklist(arg0: SlotPos): SlotIterator;
    blacklist(arg0: number, arg1: number): SlotIterator;
    get(): any;
    next(): SlotIterator;
    set(arg0: ClickableItem): SlotIterator;
    previous(): SlotIterator;
}
export declare class SlotIterator {
    static get $javaClass(): any;
}
