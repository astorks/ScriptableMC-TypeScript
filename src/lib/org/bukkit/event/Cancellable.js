export default class Cancellable {
    static get $javaClass() {
        return Java.type('org.bukkit.event.Cancellable');
    }
}
