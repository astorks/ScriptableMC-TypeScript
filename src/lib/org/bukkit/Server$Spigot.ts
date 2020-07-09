declare var Java: any;
import BaseComponent from '../../net/md_5/bungee/api/chat/BaseComponent.js'
import YamlConfiguration from './configuration/file/YamlConfiguration.js'

export default interface Server$Spigot {
	broadcast(components: Array<BaseComponent>): void;
	broadcast(component: BaseComponent): void;
	getConfig(): YamlConfiguration;
	restart(): void;
}

export default class Server$Spigot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Server$Spigot');
	}

	constructor();
	constructor(...args: any[]) {
		return new Server$Spigot.$javaClass(...args);
	}

}

