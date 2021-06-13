declare var Java: any;

export default interface FishHook$HookState {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class FishHook$HookState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.FishHook$HookState');
	}

	public static get BOBBING(): FishHook$HookState {
		return this.$javaClass.BOBBING;
	}
	public static get HOOKED_ENTITY(): FishHook$HookState {
		return this.$javaClass.HOOKED_ENTITY;
	}
	public static get UNHOOKED(): FishHook$HookState {
		return this.$javaClass.UNHOOKED;
	}
	public static valueOf(arg0: string): FishHook$HookState;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return FishHook$HookState.$javaClass.valueOf(...args);
	}

	public static values(): Array<FishHook$HookState>;
	public static values(...args: any[]): any {
		return FishHook$HookState.$javaClass.values(...args);
	}

}

