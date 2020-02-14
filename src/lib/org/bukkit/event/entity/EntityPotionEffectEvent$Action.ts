declare var Java: any;

export default interface EntityPotionEffectEvent$Action {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class EntityPotionEffectEvent$Action {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPotionEffectEvent$Action');
	}

	public static get ADDED(): EntityPotionEffectEvent$Action {
		return this.$javaClass.ADDED;
	}
	public static get CHANGED(): EntityPotionEffectEvent$Action {
		return this.$javaClass.CHANGED;
	}
	public static get CLEARED(): EntityPotionEffectEvent$Action {
		return this.$javaClass.CLEARED;
	}
	public static get REMOVED(): EntityPotionEffectEvent$Action {
		return this.$javaClass.REMOVED;
	}
}

