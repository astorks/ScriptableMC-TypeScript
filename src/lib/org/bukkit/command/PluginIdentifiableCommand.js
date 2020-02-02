export default class PluginIdentifiableCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.PluginIdentifiableCommand');
    }
}
