declare var Java: any;
import Ageable from '../../../../../org/bukkit/block/data/Ageable.js'
import Bamboo$Leaves from './Bamboo$Leaves.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import Sapling from './Sapling.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'

export default interface Bamboo extends Ageable, Sapling {
	clone(): any;
	clone(): BlockData;
	getAge(): number;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getLeaves(): Bamboo$Leaves;
	getMaterial(): Material;
	getMaximumAge(): number;
	getMaximumStage(): number;
	getSoundGroup(): SoundGroup;
	getStage(): number;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAge(arg0: number): void;
	setLeaves(arg0: Bamboo$Leaves): void;
	setStage(arg0: number): void;
}

export default class Bamboo {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Bamboo');
	}

}

