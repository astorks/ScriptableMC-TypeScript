declare var Java: any;
import Ageable from '../../../../../org/bukkit/block/data/Ageable.js'
import Bamboo$Leaves from '../../../../../org/bukkit/block/data/type/Bamboo$Leaves.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import Sapling from '../../../../../org/bukkit/block/data/type/Sapling.js'

export default interface Bamboo extends Ageable, Sapling {
	getLeaves(): Bamboo$Leaves;
	setLeaves(arg0: Bamboo$Leaves): void;
	getAge(): number;
	setAge(arg0: number): void;
	getMaximumAge(): number;
	getMaterial(): Material;
	getAsString(arg0: boolean): string;
	getAsString(): string;
	clone(): BlockData;
	clone(): any;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	getStage(): number;
	setStage(arg0: number): void;
	getMaximumStage(): number;
}

export default class Bamboo {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Bamboo');
	}
}

