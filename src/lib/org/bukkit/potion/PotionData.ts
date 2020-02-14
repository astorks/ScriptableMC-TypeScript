declare var Java: any;
import PotionType from '../../../org/bukkit/potion/PotionType.js'

export default interface PotionData {
	isUpgraded(): boolean;
	isExtended(): boolean;
	getType(): PotionType;
}

export default class PotionData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.PotionData');
	}
	constructor(type: PotionType, extended: boolean, upgraded: boolean);
	constructor(type: PotionType);
	constructor(...args: any[]) {
		return new PotionData.$javaClass(...args);
	}
}

