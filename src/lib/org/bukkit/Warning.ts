declare var Java: any;

export default interface Warning {
	annotationType(): any;
	reason(): string;
	value(): boolean;
}

export default class Warning {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Warning');
	}

}

