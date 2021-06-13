declare var Java: any;
import Color from './Color.js'

export default interface DyeColor {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getColor(): Color;
	getDeclaringClass(): any;
	getDyeData(): number;
	getFireworkColor(): Color;
	getWoolData(): number;
	name(): string;
	ordinal(): number;
}

export default class DyeColor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.DyeColor');
	}

	public static get BLACK(): DyeColor {
		return this.$javaClass.BLACK;
	}
	public static get BLUE(): DyeColor {
		return this.$javaClass.BLUE;
	}
	public static get BROWN(): DyeColor {
		return this.$javaClass.BROWN;
	}
	public static get CYAN(): DyeColor {
		return this.$javaClass.CYAN;
	}
	public static get GRAY(): DyeColor {
		return this.$javaClass.GRAY;
	}
	public static get GREEN(): DyeColor {
		return this.$javaClass.GREEN;
	}
	public static get LIGHT_BLUE(): DyeColor {
		return this.$javaClass.LIGHT_BLUE;
	}
	public static get LIGHT_GRAY(): DyeColor {
		return this.$javaClass.LIGHT_GRAY;
	}
	public static get LIME(): DyeColor {
		return this.$javaClass.LIME;
	}
	public static get MAGENTA(): DyeColor {
		return this.$javaClass.MAGENTA;
	}
	public static get ORANGE(): DyeColor {
		return this.$javaClass.ORANGE;
	}
	public static get PINK(): DyeColor {
		return this.$javaClass.PINK;
	}
	public static get PURPLE(): DyeColor {
		return this.$javaClass.PURPLE;
	}
	public static get RED(): DyeColor {
		return this.$javaClass.RED;
	}
	public static get WHITE(): DyeColor {
		return this.$javaClass.WHITE;
	}
	public static get YELLOW(): DyeColor {
		return this.$javaClass.YELLOW;
	}
	public static getByColor(color: Color): DyeColor;
	public static getByColor(...args: any[]): any {
		return DyeColor.$javaClass.getByColor(...args);
	}

	public static getByDyeData(data: number): DyeColor;
	public static getByDyeData(...args: any[]): any {
		return DyeColor.$javaClass.getByDyeData(...args);
	}

	public static getByFireworkColor(color: Color): DyeColor;
	public static getByFireworkColor(...args: any[]): any {
		return DyeColor.$javaClass.getByFireworkColor(...args);
	}

	public static getByWoolData(data: number): DyeColor;
	public static getByWoolData(...args: any[]): any {
		return DyeColor.$javaClass.getByWoolData(...args);
	}

	public static legacyValueOf(_name: string): DyeColor;
	public static legacyValueOf(...args: any[]): any {
		return DyeColor.$javaClass.legacyValueOf(...args);
	}

	public static valueOf(arg0: string): DyeColor;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return DyeColor.$javaClass.valueOf(...args);
	}

	public static values(): Array<DyeColor>;
	public static values(...args: any[]): any {
		return DyeColor.$javaClass.values(...args);
	}

}

