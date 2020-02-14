declare var Java: any;

export default interface Warning {
	reason(): string;
	value(): boolean;
	annotationType(): any;
}

export default class Warning {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Warning');
	}
}

