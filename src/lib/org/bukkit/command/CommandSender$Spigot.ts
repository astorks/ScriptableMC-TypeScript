declare var Java: any;
import BaseComponent from '../../../net/md_5/bungee/api/chat/BaseComponent.js'

export default interface CommandSender$Spigot {
	sendMessage(components: Array<BaseComponent>): void;
	sendMessage(component: BaseComponent): void;
	sendMessage(sender: string, components: Array<BaseComponent>): void;
	sendMessage(sender: string, component: BaseComponent): void;
}

export default class CommandSender$Spigot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.CommandSender$Spigot');
	}

	constructor();
	constructor(...args: any[]) {
		return new CommandSender$Spigot.$javaClass(...args);
	}

}

