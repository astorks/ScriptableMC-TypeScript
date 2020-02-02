export default class TreeSpecies {
    static get $javaClass() {
        return Java.type('org.bukkit.TreeSpecies');
    }
    static get GENERIC() {
        return this.$javaClass.GENERIC;
    }
    static get REDWOOD() {
        return this.$javaClass.REDWOOD;
    }
    static get BIRCH() {
        return this.$javaClass.BIRCH;
    }
    static get JUNGLE() {
        return this.$javaClass.JUNGLE;
    }
    static get ACACIA() {
        return this.$javaClass.ACACIA;
    }
    static get DARK_OAK() {
        return this.$javaClass.DARK_OAK;
    }
}
