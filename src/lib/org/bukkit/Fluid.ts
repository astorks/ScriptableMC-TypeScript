declare var Java: any;
import Keyed from './Keyed.js'
import NamespacedKey from './NamespacedKey.js'

export default interface Fluid extends Keyed {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	getKey(): NamespacedKey;
	name(): string;
	ordinal(): number;
}

export default class Fluid {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Fluid');
	}

	public static get FLOWING_LAVA(): Fluid {
		return this.$javaClass.FLOWING_LAVA;
	}
	public static get FLOWING_WATER(): Fluid {
		return this.$javaClass.FLOWING_WATER;
	}
	public static get LAVA(): Fluid {
		return this.$javaClass.LAVA;
	}
	public static get WATER(): Fluid {
		return this.$javaClass.WATER;
	}
	public static valueOf(arg0: string): Fluid;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Fluid.$javaClass.valueOf(...args);
	}

	public static values(): Array<Fluid>;
	public static values(...args: any[]): any {
		return Fluid.$javaClass.values(...args);
	}

}

