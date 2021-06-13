declare var Java: any;
import BaseComponent from '../../../net/md_5/bungee/api/chat/BaseComponent.js'
import Entity$Spigot from './Entity$Spigot.js'

export default interface LightningStrike$Spigot extends Entity$Spigot {
	isSilent(): boolean;
	sendMessage(components: Array<BaseComponent>): void;
	sendMessage(component: BaseComponent): void;
	sendMessage(sender: string, components: Array<BaseComponent>): void;
	sendMessage(sender: string, component: BaseComponent): void;
}

export default class LightningStrike$Spigot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.LightningStrike$Spigot');
	}

	constructor();
	constructor(...args: any[]) {
		return new LightningStrike$Spigot.$javaClass(...args);
	}

}

