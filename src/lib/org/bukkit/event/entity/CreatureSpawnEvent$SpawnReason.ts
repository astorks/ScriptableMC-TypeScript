declare var Java: any;

export default interface CreatureSpawnEvent$SpawnReason {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class CreatureSpawnEvent$SpawnReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason');
	}

	public static get BEEHIVE(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.BEEHIVE;
	}
	public static get BREEDING(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.BREEDING;
	}
	public static get BUILD_IRONGOLEM(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.BUILD_IRONGOLEM;
	}
	public static get BUILD_SNOWMAN(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.BUILD_SNOWMAN;
	}
	public static get BUILD_WITHER(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.BUILD_WITHER;
	}
	public static get CHUNK_GEN(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.CHUNK_GEN;
	}
	public static get COMMAND(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.COMMAND;
	}
	public static get CURED(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.CURED;
	}
	public static get CUSTOM(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.CUSTOM;
	}
	public static get DEFAULT(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.DEFAULT;
	}
	public static get DISPENSE_EGG(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.DISPENSE_EGG;
	}
	public static get DROWNED(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.DROWNED;
	}
	public static get EGG(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.EGG;
	}
	public static get ENDER_PEARL(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.ENDER_PEARL;
	}
	public static get EXPLOSION(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.EXPLOSION;
	}
	public static get INFECTION(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.INFECTION;
	}
	public static get JOCKEY(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.JOCKEY;
	}
	public static get LIGHTNING(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.LIGHTNING;
	}
	public static get MOUNT(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.MOUNT;
	}
	public static get NATURAL(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.NATURAL;
	}
	public static get NETHER_PORTAL(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.NETHER_PORTAL;
	}
	public static get OCELOT_BABY(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.OCELOT_BABY;
	}
	public static get PATROL(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.PATROL;
	}
	public static get PIGLIN_ZOMBIFIED(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.PIGLIN_ZOMBIFIED;
	}
	public static get RAID(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.RAID;
	}
	public static get REINFORCEMENTS(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.REINFORCEMENTS;
	}
	public static get SHEARED(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.SHEARED;
	}
	public static get SHOULDER_ENTITY(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.SHOULDER_ENTITY;
	}
	public static get SILVERFISH_BLOCK(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.SILVERFISH_BLOCK;
	}
	public static get SLIME_SPLIT(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.SLIME_SPLIT;
	}
	public static get SPAWNER(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.SPAWNER;
	}
	public static get SPAWNER_EGG(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.SPAWNER_EGG;
	}
	public static get TRAP(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.TRAP;
	}
	public static get VILLAGE_DEFENSE(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.VILLAGE_DEFENSE;
	}
	public static get VILLAGE_INVASION(): CreatureSpawnEvent$SpawnReason {
		return this.$javaClass.VILLAGE_INVASION;
	}
	public static valueOf(arg0: string): CreatureSpawnEvent$SpawnReason;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return CreatureSpawnEvent$SpawnReason.$javaClass.valueOf(...args);
	}

	public static values(): Array<CreatureSpawnEvent$SpawnReason>;
	public static values(...args: any[]): any {
		return CreatureSpawnEvent$SpawnReason.$javaClass.values(...args);
	}

}

