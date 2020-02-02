export default class Listener {
    static get $javaClass() {
        return Java.type('org.bukkit.event.Listener');
    }
}
