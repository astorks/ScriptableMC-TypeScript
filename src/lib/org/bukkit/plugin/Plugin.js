export default class Plugin {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.Plugin');
    }
}
