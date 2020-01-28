export class Difficulty {
    static get $javaClass() {
        return Java.type('org.bukkit.Difficulty');
    }
    static get PEACEFUL() {
        return this.$javaClass.PEACEFUL;
    }
    static get EASY() {
        return this.$javaClass.EASY;
    }
    static get NORMAL() {
        return this.$javaClass.NORMAL;
    }
    static get HARD() {
        return this.$javaClass.HARD;
    }
}
//# sourceMappingURL=Difficulty.js.map