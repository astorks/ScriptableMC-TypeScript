declare var Java: any;
import {DyeColor} from '../../../org/bukkit/DyeColor.js'

export interface Colorable {
	getColor(): DyeColor;
	setColor(color: DyeColor): void;
}

export class Colorable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Colorable');
	}
}

