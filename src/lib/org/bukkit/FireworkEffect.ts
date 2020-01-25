declare var Java: any;
import {FireworkEffect$Builder} from '../../org/bukkit/FireworkEffect$Builder.js'
import {ConfigurationSerializable} from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import {FireworkEffect$Type} from '../../org/bukkit/FireworkEffect$Type.js'

export interface FireworkEffect extends ConfigurationSerializable {
	serialize(): any;
	hasFlicker(): boolean;
	hasTrail(): boolean;
	getColors(): any;
	getFadeColors(): any;
	getType(): FireworkEffect$Type;
}

export class FireworkEffect {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FireworkEffect');
	}
	public static builder(): FireworkEffect$Builder;
	public static builder(...args: any[]): any {
		return FireworkEffect.$javaClass.builder(...args);
	}
	public static deserialize(map: any): ConfigurationSerializable;
	public static deserialize(...args: any[]): any {
		return FireworkEffect.$javaClass.deserialize(...args);
	}
}

