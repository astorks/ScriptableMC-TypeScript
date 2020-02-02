export default class FireworkEffect {
    static get $javaClass() {
        return Java.type('org.bukkit.FireworkEffect');
    }
    static builder(...args) {
        return FireworkEffect.$javaClass.builder(...args);
    }
    static deserialize(...args) {
        return FireworkEffect.$javaClass.deserialize(...args);
    }
}
