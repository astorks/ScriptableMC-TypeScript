export default class Criterias {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.Criterias');
    }
    static get HEALTH() {
        return Criterias.$javaClass.HEALTH;
    }
    static get PLAYER_KILLS() {
        return Criterias.$javaClass.PLAYER_KILLS;
    }
    static get TOTAL_KILLS() {
        return Criterias.$javaClass.TOTAL_KILLS;
    }
    static get DEATHS() {
        return Criterias.$javaClass.DEATHS;
    }
}
