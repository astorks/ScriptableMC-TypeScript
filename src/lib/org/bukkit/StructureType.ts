declare var Java: any;
import MapCursor$Type from './map/MapCursor$Type.js'

export default interface StructureType {
	getMapIcon(): MapCursor$Type;
	getName(): string;
}

export default class StructureType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.StructureType');
	}

	public static get BASTION_REMNANT(): StructureType {
		return StructureType.$javaClass.BASTION_REMNANT;
	}

	public static get BURIED_TREASURE(): StructureType {
		return StructureType.$javaClass.BURIED_TREASURE;
	}

	public static get DESERT_PYRAMID(): StructureType {
		return StructureType.$javaClass.DESERT_PYRAMID;
	}

	public static get END_CITY(): StructureType {
		return StructureType.$javaClass.END_CITY;
	}

	public static get IGLOO(): StructureType {
		return StructureType.$javaClass.IGLOO;
	}

	public static get JUNGLE_PYRAMID(): StructureType {
		return StructureType.$javaClass.JUNGLE_PYRAMID;
	}

	public static get MINESHAFT(): StructureType {
		return StructureType.$javaClass.MINESHAFT;
	}

	public static get NETHER_FORTRESS(): StructureType {
		return StructureType.$javaClass.NETHER_FORTRESS;
	}

	public static get NETHER_FOSSIL(): StructureType {
		return StructureType.$javaClass.NETHER_FOSSIL;
	}

	public static get OCEAN_MONUMENT(): StructureType {
		return StructureType.$javaClass.OCEAN_MONUMENT;
	}

	public static get OCEAN_RUIN(): StructureType {
		return StructureType.$javaClass.OCEAN_RUIN;
	}

	public static get PILLAGER_OUTPOST(): StructureType {
		return StructureType.$javaClass.PILLAGER_OUTPOST;
	}

	public static get RUINED_PORTAL(): StructureType {
		return StructureType.$javaClass.RUINED_PORTAL;
	}

	public static get SHIPWRECK(): StructureType {
		return StructureType.$javaClass.SHIPWRECK;
	}

	public static get STRONGHOLD(): StructureType {
		return StructureType.$javaClass.STRONGHOLD;
	}

	public static get SWAMP_HUT(): StructureType {
		return StructureType.$javaClass.SWAMP_HUT;
	}

	public static get VILLAGE(): StructureType {
		return StructureType.$javaClass.VILLAGE;
	}

	public static get WOODLAND_MANSION(): StructureType {
		return StructureType.$javaClass.WOODLAND_MANSION;
	}

	public static getStructureTypes(): any;
	public static getStructureTypes(...args: any[]): any {
		return StructureType.$javaClass.getStructureTypes(...args);
	}

}

