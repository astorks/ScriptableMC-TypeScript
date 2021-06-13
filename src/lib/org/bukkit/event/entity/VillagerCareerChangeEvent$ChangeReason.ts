declare var Java: any;

export default interface VillagerCareerChangeEvent$ChangeReason {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class VillagerCareerChangeEvent$ChangeReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.VillagerCareerChangeEvent$ChangeReason');
	}

	public static get EMPLOYED(): VillagerCareerChangeEvent$ChangeReason {
		return this.$javaClass.EMPLOYED;
	}
	public static get LOSING_JOB(): VillagerCareerChangeEvent$ChangeReason {
		return this.$javaClass.LOSING_JOB;
	}
	public static valueOf(arg0: string): VillagerCareerChangeEvent$ChangeReason;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return VillagerCareerChangeEvent$ChangeReason.$javaClass.valueOf(...args);
	}

	public static values(): Array<VillagerCareerChangeEvent$ChangeReason>;
	public static values(...args: any[]): any {
		return VillagerCareerChangeEvent$ChangeReason.$javaClass.values(...args);
	}

}

