import { Event } from "./lib/org/bukkit/event/Event.js";
import { Server } from "./lib/org/bukkit/Server.js";
import { ScriptablePluginContext } from "./lib/com/pixlfox/scriptableplugin/core/ScriptablePluginContext.js";
import { PluginCommand } from "./lib/org/bukkit/command/PluginCommand.js";
import { ScriptablePluginEngine } from "./lib/com/pixlfox/scriptableplugin/core/ScriptablePluginEngine.js";
import { Player } from "./lib/org/bukkit/entity/Player.js";
import { PluginMessageListenerRegistration } from "./lib/org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js";

declare const engine: ScriptablePluginEngine;

export class JsPlugin {
    public context: ScriptablePluginContext;

    get pluginName(): string {
        return this.constructor.name;
    }

    get server(): Server {
        return this.context.getServer();
    }

    registerEvent<T extends Event>(eventClass: Newable<T>, callback: (listener: any, event: T) => void) {
        this.context.registerEvent(eventClass['$javaClass'], callback.bind(this));
    }

    newCommand(name: string): PluginCommand {
        return this.context.newCommand(name);
    }

    registerIncomingPluginChannel(channel: string, callback: (channel: string, player: Player, message: number[]) => void): PluginMessageListenerRegistration {
        return this.context.registerIncomingPluginChannel(channel, callback.bind(this));
    }

    unregisterIncomingPluginChannel(messageListenerRegistration: PluginMessageListenerRegistration) {
        this.context.unregisterIncomingPluginChannel(messageListenerRegistration);
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

export type Newable<T> = { new (...args: any[]): T; };