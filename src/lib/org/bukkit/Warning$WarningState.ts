declare var Java: any;
import Warning from './Warning.js'

export default interface Warning$WarningState {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
	printFor(warning: Warning): boolean;
}

export default class Warning$WarningState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Warning$WarningState');
	}

	public static get DEFAULT(): Warning$WarningState {
		return this.$javaClass.DEFAULT;
	}
	public static get OFF(): Warning$WarningState {
		return this.$javaClass.OFF;
	}
	public static get ON(): Warning$WarningState {
		return this.$javaClass.ON;
	}
	public static value(value: string): Warning$WarningState;
	public static value(...args: any[]): any {
		return Warning$WarningState.$javaClass.value(...args);
	}

	public static valueOf(arg0: string): Warning$WarningState;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Warning$WarningState.$javaClass.valueOf(...args);
	}

	public static values(): Array<Warning$WarningState>;
	public static values(...args: any[]): any {
		return Warning$WarningState.$javaClass.values(...args);
	}

}

