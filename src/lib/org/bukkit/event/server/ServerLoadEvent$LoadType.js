export default class ServerLoadEvent$LoadType {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServerLoadEvent$LoadType');
    }
    static get STARTUP() {
        return this.$javaClass.STARTUP;
    }
    static get RELOAD() {
        return this.$javaClass.RELOAD;
    }
}
