import JsPlugin from '../../lib/JsPlugin.js';
import Player from '../../lib/org/bukkit/entity/Player.js';
import Command from '../../lib/org/bukkit/command/Command.js';

export default class SoundsMenu extends JsPlugin {

    onLoad() {
        console.log("[" + this.pluginName + "] onLoad()");
    }

    onEnable() {
        console.log("[" + this.pluginName + "] onEnable()");

        let command = this.newCommand("sounds");
        command.setPermission("smc.sounds");
        command.setExecutor(this.onCmdExecute.bind(this));
        this.registerCommand(command);
    }

    onDisable() {
        console.log("[" + this.pluginName + "] onDisable()");
    }

    onCmdExecute(sender: Player, command: Command, label: string, args: Array<string>): Boolean {
        console.log(args);
        return false;
    }
}