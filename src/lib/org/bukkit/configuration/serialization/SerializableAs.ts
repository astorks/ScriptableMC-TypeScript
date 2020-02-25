declare var Java: any;

export default interface SerializableAs {
	annotationType(): any;
	value(): string;
}

export default class SerializableAs {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.serialization.SerializableAs');
	}

}

