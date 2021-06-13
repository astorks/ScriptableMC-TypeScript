declare var Java: any;
import Ageable from '../../../../../org/bukkit/block/data/Ageable.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import CaveVinesPlant from './CaveVinesPlant.js'
import Material from '../../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'

export default interface CaveVines extends Ageable, CaveVinesPlant {
	clone(): any;
	clone(): BlockData;
	getAge(): number;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getMaximumAge(): number;
	getSoundGroup(): SoundGroup;
	isBerries(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAge(arg0: number): void;
	setBerries(arg0: boolean): void;
}

export default class CaveVines {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.CaveVines');
	}

}

