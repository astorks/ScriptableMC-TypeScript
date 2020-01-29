import { ClickableItem } from '../../../../fr/minuskube/inv/ClickableItem.js';
import { SlotPos } from '../../../../fr/minuskube/inv/content/SlotPos.js';
export interface SlotIterator {
    get(): any;
    next(): SlotIterator;
    set(arg0: ClickableItem): SlotIterator;
    started(): boolean;
    previous(): SlotIterator;
    row(arg0: number): SlotIterator;
    row(): number;
    column(arg0: number): SlotIterator;
    column(): number;
    ended(): boolean;
    blacklist(arg0: number, arg1: number): SlotIterator;
    blacklist(arg0: SlotPos): SlotIterator;
    allowOverride(arg0: boolean): SlotIterator;
    doesAllowOverride(): boolean;
}
export declare class SlotIterator {
    static get $javaClass(): any;
}
