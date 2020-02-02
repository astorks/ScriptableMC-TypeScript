export default class Server {
    static get $javaClass() {
        return Java.type('org.bukkit.Server');
    }
    static get BROADCAST_CHANNEL_ADMINISTRATIVE() {
        return Server.$javaClass.BROADCAST_CHANNEL_ADMINISTRATIVE;
    }
    static get BROADCAST_CHANNEL_USERS() {
        return Server.$javaClass.BROADCAST_CHANNEL_USERS;
    }
}
