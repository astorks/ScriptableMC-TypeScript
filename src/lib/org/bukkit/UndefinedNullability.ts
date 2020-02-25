declare var Java: any;

export default interface UndefinedNullability {
	annotationType(): any;
	value(): string;
}

export default class UndefinedNullability {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.UndefinedNullability');
	}

}

