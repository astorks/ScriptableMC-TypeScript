export default class BukkitRunnable {
    static get $javaClass() {
        return Java.type('org.bukkit.scheduler.BukkitRunnable');
    }
    constructor(...args) {
        return new BukkitRunnable.$javaClass(...args);
    }
}
