declare var Java: any;
import BaseComponent from '../../../net/md_5/bungee/api/chat/BaseComponent.js'
import CommandSender$Spigot from '../../../org/bukkit/command/CommandSender$Spigot.js'

export default interface Entity$Spigot extends CommandSender$Spigot {
	sendMessage(components: Array<BaseComponent>): void;
	sendMessage(component: BaseComponent): void;
	sendMessage(sender: string, components: Array<BaseComponent>): void;
	sendMessage(sender: string, component: BaseComponent): void;
}

export default class Entity$Spigot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Entity$Spigot');
	}

	constructor();
	constructor(...args: any[]) {
		return new Entity$Spigot.$javaClass(...args);
	}

}
