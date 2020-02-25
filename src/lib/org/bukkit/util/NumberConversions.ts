declare var Java: any;

export default class NumberConversions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.NumberConversions');
	}

	public static ceil(num: number): number;
	public static ceil(...args: any[]): any {
		return NumberConversions.$javaClass.ceil(...args);
	}

	public static checkFinite(d: number, message: string): void;
	public static checkFinite(d: number, message: string): void;
	public static checkFinite(...args: any[]): any {
		return NumberConversions.$javaClass.checkFinite(...args);
	}

	public static floor(num: number): number;
	public static floor(...args: any[]): any {
		return NumberConversions.$javaClass.floor(...args);
	}

	public static isFinite(f: number): boolean;
	public static isFinite(d: number): boolean;
	public static isFinite(...args: any[]): any {
		return NumberConversions.$javaClass.isFinite(...args);
	}

	public static round(num: number): number;
	public static round(...args: any[]): any {
		return NumberConversions.$javaClass.round(...args);
	}

	public static square(num: number): number;
	public static square(...args: any[]): any {
		return NumberConversions.$javaClass.square(...args);
	}

	public static toByte(object: any): number;
	public static toByte(...args: any[]): any {
		return NumberConversions.$javaClass.toByte(...args);
	}

	public static toDouble(object: any): number;
	public static toDouble(...args: any[]): any {
		return NumberConversions.$javaClass.toDouble(...args);
	}

	public static toFloat(object: any): number;
	public static toFloat(...args: any[]): any {
		return NumberConversions.$javaClass.toFloat(...args);
	}

	public static toInt(object: any): number;
	public static toInt(...args: any[]): any {
		return NumberConversions.$javaClass.toInt(...args);
	}

	public static toLong(object: any): number;
	public static toLong(...args: any[]): any {
		return NumberConversions.$javaClass.toLong(...args);
	}

	public static toShort(object: any): number;
	public static toShort(...args: any[]): any {
		return NumberConversions.$javaClass.toShort(...args);
	}

}

