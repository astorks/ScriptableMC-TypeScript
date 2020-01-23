import { Event } from "./lib/org/bukkit/event/Event.js";
import { Server } from "./lib/org/bukkit/Server.js";
import { ScriptablePluginContext } from "./lib/com/pixlfox/scriptablemc/core/ScriptablePluginContext.js";
import { ScriptablePluginEngine } from "./lib/com/pixlfox/scriptablemc/core/ScriptablePluginEngine.js";
import { PluginCommand } from "./lib/org/bukkit/command/PluginCommand.js";
import { Player } from "./lib/org/bukkit/entity/Player.js";
import { PluginMessageListenerRegistration } from "./lib/org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js";

declare const engine: ScriptablePluginEngine;
declare type Type<T> = { new (...args: any[]): T; };

export class JsPlugin {
    public context: ScriptablePluginContext;

    get pluginName(): string {
        return this.constructor.name;
    }

    get server(): Server {
        return this.context.getServer();
    }

    registerEvent<T extends Event>(eventClass: Type<T>, callback: (listener: any, event: T) => void) {
        this.context.registerEvent(eventClass['$javaClass'], callback.bind(this));
    }

    newCommand(name: string): PluginCommand {
        return this.context.newCommand(name);
    }

    registerIncomingPluginChannel(channel: string, callback: (channel: string, player: Player, message: number[]) => void): PluginMessageListenerRegistration {
        return this.context.registerIncomingPluginChannel(channel, callback.bind(this));
    }

    unregisterIncomingPluginChannel(channel: string) {
        this.context.unregisterIncomingPluginChannel(channel);
    }

    registerOutgoingPluginChannel(channel: string) {
        this.context.registerOutgoingPluginChannel(channel);
    }

    unregisterOutgoingPluginChannel(channel: string) {
        this.context.unregisterOutgoingPluginChannel(channel);
    }

    unregisterCommand(command: PluginCommand) {
        this.context.unregisterCommand(command);
    }

    registerCommand(command: PluginCommand) {
        this.context.registerCommand(command);
    }

    onLoad(): void { console.log("[" + this.pluginName + "] onLoad()"); }
    onEnable(): void { console.log("[" + this.pluginName + "] onEnable()"); }
    onDisable(): void { console.log("[" + this.pluginName + "] onDisable()"); }
}