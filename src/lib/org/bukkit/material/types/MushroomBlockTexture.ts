declare var Java: any;
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'

export default interface MushroomBlockTexture {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getCapFace(): BlockFace;
	getData(): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class MushroomBlockTexture {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.types.MushroomBlockTexture');
	}

	public static get ALL_CAP(): MushroomBlockTexture {
		return this.$javaClass.ALL_CAP;
	}
	public static get ALL_PORES(): MushroomBlockTexture {
		return this.$javaClass.ALL_PORES;
	}
	public static get ALL_STEM(): MushroomBlockTexture {
		return this.$javaClass.ALL_STEM;
	}
	public static get CAP_EAST(): MushroomBlockTexture {
		return this.$javaClass.CAP_EAST;
	}
	public static get CAP_NORTH(): MushroomBlockTexture {
		return this.$javaClass.CAP_NORTH;
	}
	public static get CAP_NORTH_EAST(): MushroomBlockTexture {
		return this.$javaClass.CAP_NORTH_EAST;
	}
	public static get CAP_NORTH_WEST(): MushroomBlockTexture {
		return this.$javaClass.CAP_NORTH_WEST;
	}
	public static get CAP_SOUTH(): MushroomBlockTexture {
		return this.$javaClass.CAP_SOUTH;
	}
	public static get CAP_SOUTH_EAST(): MushroomBlockTexture {
		return this.$javaClass.CAP_SOUTH_EAST;
	}
	public static get CAP_SOUTH_WEST(): MushroomBlockTexture {
		return this.$javaClass.CAP_SOUTH_WEST;
	}
	public static get CAP_TOP(): MushroomBlockTexture {
		return this.$javaClass.CAP_TOP;
	}
	public static get CAP_WEST(): MushroomBlockTexture {
		return this.$javaClass.CAP_WEST;
	}
	public static get STEM_SIDES(): MushroomBlockTexture {
		return this.$javaClass.STEM_SIDES;
	}
}

