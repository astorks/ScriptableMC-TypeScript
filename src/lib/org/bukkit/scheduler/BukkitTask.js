export default class BukkitTask {
    static get $javaClass() {
        return Java.type('org.bukkit.scheduler.BukkitTask');
    }
}
