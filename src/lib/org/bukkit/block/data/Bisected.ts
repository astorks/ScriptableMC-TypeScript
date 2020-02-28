declare var Java: any;
import Bisected$Half from './Bisected$Half.js'
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'

export default interface Bisected extends BlockData {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getHalf(): Bisected$Half;
	getMaterial(): Material;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setHalf(arg0: Bisected$Half): void;
}

export default class Bisected {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Bisected');
	}

}

