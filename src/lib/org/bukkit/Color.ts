declare var Java: any;
import ConfigurationSerializable from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import DyeColor from '../../org/bukkit/DyeColor.js'

export default interface Color extends ConfigurationSerializable {
	asBGR(): number;
	asRGB(): number;
	getBlue(): number;
	getGreen(): number;
	getRed(): number;
	mixColors(colors: Array<Color>): Color;
	mixDyes(colors: Array<DyeColor>): Color;
	serialize(): any;
	setBlue(blue: number): Color;
	setGreen(green: number): Color;
	setRed(red: number): Color;
}

export default class Color {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Color');
	}

	public static get AQUA(): Color {
		return Color.$javaClass.AQUA;
	}

	public static get BLACK(): Color {
		return Color.$javaClass.BLACK;
	}

	public static get BLUE(): Color {
		return Color.$javaClass.BLUE;
	}

	public static get FUCHSIA(): Color {
		return Color.$javaClass.FUCHSIA;
	}

	public static get GRAY(): Color {
		return Color.$javaClass.GRAY;
	}

	public static get GREEN(): Color {
		return Color.$javaClass.GREEN;
	}

	public static get LIME(): Color {
		return Color.$javaClass.LIME;
	}

	public static get MAROON(): Color {
		return Color.$javaClass.MAROON;
	}

	public static get NAVY(): Color {
		return Color.$javaClass.NAVY;
	}

	public static get OLIVE(): Color {
		return Color.$javaClass.OLIVE;
	}

	public static get ORANGE(): Color {
		return Color.$javaClass.ORANGE;
	}

	public static get PURPLE(): Color {
		return Color.$javaClass.PURPLE;
	}

	public static get RED(): Color {
		return Color.$javaClass.RED;
	}

	public static get SILVER(): Color {
		return Color.$javaClass.SILVER;
	}

	public static get TEAL(): Color {
		return Color.$javaClass.TEAL;
	}

	public static get WHITE(): Color {
		return Color.$javaClass.WHITE;
	}

	public static get YELLOW(): Color {
		return Color.$javaClass.YELLOW;
	}

	public static deserialize(map: any): Color;
	public static deserialize(...args: any[]): any {
		return Color.$javaClass.deserialize(...args);
	}

	public static fromBGR(bgr: number): Color;
	public static fromBGR(blue: number, green: number, red: number): Color;
	public static fromBGR(...args: any[]): any {
		return Color.$javaClass.fromBGR(...args);
	}

	public static fromRGB(rgb: number): Color;
	public static fromRGB(red: number, green: number, blue: number): Color;
	public static fromRGB(...args: any[]): any {
		return Color.$javaClass.fromRGB(...args);
	}

}

