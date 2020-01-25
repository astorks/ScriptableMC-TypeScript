declare var Java: any;

export interface Warning {
	reason(): string;
	value(): boolean;
	annotationType(): any;
}

export class Warning {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Warning');
	}
}

