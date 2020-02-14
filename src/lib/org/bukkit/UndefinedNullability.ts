declare var Java: any;

export default interface UndefinedNullability {
	value(): string;
	annotationType(): any;
}

export default class UndefinedNullability {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.UndefinedNullability');
	}
}

