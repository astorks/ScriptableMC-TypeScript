declare var Java: any;
import PotionType from '../../../org/bukkit/potion/PotionType.js'

export default interface PotionData {
	getType(): PotionType;
	isExtended(): boolean;
	isUpgraded(): boolean;
}

export default class PotionData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.PotionData');
	}

	constructor(type: PotionType);
	constructor(type: PotionType, extended: boolean, upgraded: boolean);
	constructor(...args: any[]) {
		return new PotionData.$javaClass(...args);
	}

}

