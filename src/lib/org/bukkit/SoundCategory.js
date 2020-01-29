export class SoundCategory {
    static get $javaClass() {
        return Java.type('org.bukkit.SoundCategory');
    }
    static get MASTER() {
        return this.$javaClass.MASTER;
    }
    static get MUSIC() {
        return this.$javaClass.MUSIC;
    }
    static get RECORDS() {
        return this.$javaClass.RECORDS;
    }
    static get WEATHER() {
        return this.$javaClass.WEATHER;
    }
    static get BLOCKS() {
        return this.$javaClass.BLOCKS;
    }
    static get HOSTILE() {
        return this.$javaClass.HOSTILE;
    }
    static get NEUTRAL() {
        return this.$javaClass.NEUTRAL;
    }
    static get PLAYERS() {
        return this.$javaClass.PLAYERS;
    }
    static get AMBIENT() {
        return this.$javaClass.AMBIENT;
    }
    static get VOICE() {
        return this.$javaClass.VOICE;
    }
}
