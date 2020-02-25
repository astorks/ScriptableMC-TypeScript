declare var Java: any;

export default class MapPalette {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapPalette');
	}

	public static get BLUE(): number {
		return MapPalette.$javaClass.BLUE;
	}

	public static get BROWN(): number {
		return MapPalette.$javaClass.BROWN;
	}

	public static get DARK_BROWN(): number {
		return MapPalette.$javaClass.DARK_BROWN;
	}

	public static get DARK_GRAY(): number {
		return MapPalette.$javaClass.DARK_GRAY;
	}

	public static get DARK_GREEN(): number {
		return MapPalette.$javaClass.DARK_GREEN;
	}

	public static get GRAY_1(): number {
		return MapPalette.$javaClass.GRAY_1;
	}

	public static get GRAY_2(): number {
		return MapPalette.$javaClass.GRAY_2;
	}

	public static get LIGHT_BROWN(): number {
		return MapPalette.$javaClass.LIGHT_BROWN;
	}

	public static get LIGHT_GRAY(): number {
		return MapPalette.$javaClass.LIGHT_GRAY;
	}

	public static get LIGHT_GREEN(): number {
		return MapPalette.$javaClass.LIGHT_GREEN;
	}

	public static get PALE_BLUE(): number {
		return MapPalette.$javaClass.PALE_BLUE;
	}

	public static get RED(): number {
		return MapPalette.$javaClass.RED;
	}

	public static get TRANSPARENT(): number {
		return MapPalette.$javaClass.TRANSPARENT;
	}

	public static get WHITE(): number {
		return MapPalette.$javaClass.WHITE;
	}

	public static getColor(index: number): any;
	public static getColor(...args: any[]): any {
		return MapPalette.$javaClass.getColor(...args);
	}

	public static imageToBytes(image: any): Array<number>;
	public static imageToBytes(...args: any[]): any {
		return MapPalette.$javaClass.imageToBytes(...args);
	}

	public static matchColor(color: any): number;
	public static matchColor(r: number, g: number, b: number): number;
	public static matchColor(...args: any[]): any {
		return MapPalette.$javaClass.matchColor(...args);
	}

	public static resizeImage(image: any): any;
	public static resizeImage(...args: any[]): any {
		return MapPalette.$javaClass.resizeImage(...args);
	}

}

