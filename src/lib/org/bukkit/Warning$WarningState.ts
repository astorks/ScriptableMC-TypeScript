declare var Java: any;
import Warning from '../../org/bukkit/Warning.js'

export default interface Warning$WarningState {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

