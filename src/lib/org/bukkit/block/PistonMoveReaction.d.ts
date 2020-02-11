export default interface PistonMoveReaction {
    getId(): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class PistonMoveReaction {
    static get $javaClass(): any;
    static get MOVE(): PistonMoveReaction;
    static get BREAK(): PistonMoveReaction;
    static get BLOCK(): PistonMoveReaction;
    static get IGNORE(): PistonMoveReaction;
    static get PUSH_ONLY(): PistonMoveReaction;
}
