declare var Java: any;
import BaseComponent from '../../../net/md_5/bungee/api/chat/BaseComponent.js'
import ChatMessageType from '../../../net/md_5/bungee/api/ChatMessageType.js'
import Entity$Spigot from './Entity$Spigot.js'

export default interface Player$Spigot extends Entity$Spigot {
	getCollidesWithEntities(): boolean;
	getHiddenPlayers(): any;
	getRawAddress(): any;
	respawn(): void;
	sendMessage(components: Array<BaseComponent>): void;
	sendMessage(component: BaseComponent): void;
	sendMessage(position: ChatMessageType, component: BaseComponent): void;
	sendMessage(position: ChatMessageType, components: Array<BaseComponent>): void;
	sendMessage(sender: string, components: Array<BaseComponent>): void;
	sendMessage(sender: string, component: BaseComponent): void;
	sendMessage(position: ChatMessageType, sender: string, component: BaseComponent): void;
	sendMessage(position: ChatMessageType, sender: string, components: Array<BaseComponent>): void;
	setCollidesWithEntities(collides: boolean): void;
}

export default class Player$Spigot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Player$Spigot');
	}

	constructor();
	constructor(...args: any[]) {
		return new Player$Spigot.$javaClass(...args);
	}

}

