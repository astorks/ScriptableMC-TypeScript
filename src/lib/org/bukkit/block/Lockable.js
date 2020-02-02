export default class Lockable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Lockable');
    }
}
