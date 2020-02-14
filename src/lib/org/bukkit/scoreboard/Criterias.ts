declare var Java: any;

export default class Criterias {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Criterias');
	}

	public static get DEATHS(): string {
		return Criterias.$javaClass.DEATHS;
	}

	public static get HEALTH(): string {
		return Criterias.$javaClass.HEALTH;
	}

	public static get PLAYER_KILLS(): string {
		return Criterias.$javaClass.PLAYER_KILLS;
	}

	public static get TOTAL_KILLS(): string {
		return Criterias.$javaClass.TOTAL_KILLS;
	}

}

