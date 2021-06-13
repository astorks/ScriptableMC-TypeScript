declare var Java: any;
import Color from './Color.js'
import FireworkEffect from './FireworkEffect.js'
import FireworkEffect$Type from './FireworkEffect$Type.js'

export default interface FireworkEffect$Builder {
	build(): FireworkEffect;
	flicker(flicker: boolean): FireworkEffect$Builder;
	trail(trail: boolean): FireworkEffect$Builder;
	with(type: FireworkEffect$Type): FireworkEffect$Builder;
	withColor(colors: any): FireworkEffect$Builder;
	withColor(colors: Array<Color>): FireworkEffect$Builder;
	withColor(color: Color): FireworkEffect$Builder;
	withFade(color: Color): FireworkEffect$Builder;
	withFade(colors: any): FireworkEffect$Builder;
	withFade(colors: Array<Color>): FireworkEffect$Builder;
	withFlicker(): FireworkEffect$Builder;
	withTrail(): FireworkEffect$Builder;
}

export default class FireworkEffect$Builder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FireworkEffect$Builder');
	}

}

