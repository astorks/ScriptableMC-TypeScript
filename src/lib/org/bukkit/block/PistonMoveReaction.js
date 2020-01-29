export class PistonMoveReaction {
    static get $javaClass() {
        return Java.type('org.bukkit.block.PistonMoveReaction');
    }
    static get MOVE() {
        return this.$javaClass.MOVE;
    }
    static get BREAK() {
        return this.$javaClass.BREAK;
    }
    static get BLOCK() {
        return this.$javaClass.BLOCK;
    }
    static get IGNORE() {
        return this.$javaClass.IGNORE;
    }
    static get PUSH_ONLY() {
        return this.$javaClass.PUSH_ONLY;
    }
}
