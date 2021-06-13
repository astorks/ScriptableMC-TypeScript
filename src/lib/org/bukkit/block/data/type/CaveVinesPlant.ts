declare var Java: any;

export default interface CaveVinesPlant {
	isBerries(): boolean;
	setBerries(arg0: boolean): void;
}

export default class CaveVinesPlant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.CaveVinesPlant');
	}

}

