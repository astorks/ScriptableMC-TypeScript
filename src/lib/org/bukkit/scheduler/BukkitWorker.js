export default class BukkitWorker {
    static get $javaClass() {
        return Java.type('org.bukkit.scheduler.BukkitWorker');
    }
}
