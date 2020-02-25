declare var Java: any;

export default interface Redstone {
	isPowered(): boolean;
}

export default class Redstone {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Redstone');
	}

}

