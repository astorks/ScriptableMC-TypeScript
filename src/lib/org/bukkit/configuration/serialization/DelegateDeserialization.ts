declare var Java: any;

export default interface DelegateDeserialization {
	value(): any;
	annotationType(): any;
}

export default class DelegateDeserialization {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.serialization.DelegateDeserialization');
	}
}

