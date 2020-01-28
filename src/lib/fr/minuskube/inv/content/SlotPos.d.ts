export interface SlotPos {
    getRow(): number;
    getColumn(): number;
}
export declare class SlotPos {
    static get $javaClass(): any;
    constructor(row: number, column: number);
    static of(row: number, column: number): SlotPos;
}
