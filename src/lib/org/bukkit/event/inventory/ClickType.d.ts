export default interface ClickType {
    isCreativeAction(): boolean;
    isKeyboardClick(): boolean;
    isRightClick(): boolean;
    isLeftClick(): boolean;
    isShiftClick(): boolean;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class ClickType {
    static get $javaClass(): any;
    static get LEFT(): ClickType;
    static get SHIFT_LEFT(): ClickType;
    static get RIGHT(): ClickType;
    static get SHIFT_RIGHT(): ClickType;
    static get WINDOW_BORDER_LEFT(): ClickType;
    static get WINDOW_BORDER_RIGHT(): ClickType;
    static get MIDDLE(): ClickType;
    static get NUMBER_KEY(): ClickType;
    static get DOUBLE_CLICK(): ClickType;
    static get DROP(): ClickType;
    static get CONTROL_DROP(): ClickType;
    static get CREATIVE(): ClickType;
    static get UNKNOWN(): ClickType;
}
