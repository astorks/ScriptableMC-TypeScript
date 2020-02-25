declare var Java: any;
import ChatColor from '../../../org/bukkit/ChatColor.js'
import NameTagVisibility from '../../../org/bukkit/scoreboard/NameTagVisibility.js'
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js'
import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js'
import Team$Option from '../../../org/bukkit/scoreboard/Team$Option.js'
import Team$OptionStatus from '../../../org/bukkit/scoreboard/Team$OptionStatus.js'

export default interface Team {
	addEntry(arg0: string): void;
	addPlayer(arg0: OfflinePlayer): void;
	allowFriendlyFire(): boolean;
	canSeeFriendlyInvisibles(): boolean;
	getColor(): ChatColor;
	getDisplayName(): string;
	getEntries(): any;
	getName(): string;
	getNameTagVisibility(): NameTagVisibility;
	getOption(arg0: Team$Option): Team$OptionStatus;
	getPlayers(): any;
	getPrefix(): string;
	getScoreboard(): Scoreboard;
	getSize(): number;
	getSuffix(): string;
	hasEntry(arg0: string): boolean;
	hasPlayer(arg0: OfflinePlayer): boolean;
	removeEntry(arg0: string): boolean;
	removePlayer(arg0: OfflinePlayer): boolean;
	setAllowFriendlyFire(arg0: boolean): void;
	setCanSeeFriendlyInvisibles(arg0: boolean): void;
	setColor(arg0: ChatColor): void;
	setDisplayName(arg0: string): void;
	setNameTagVisibility(arg0: NameTagVisibility): void;
	setOption(arg0: Team$Option, arg1: Team$OptionStatus): void;
	setPrefix(arg0: string): void;
	setSuffix(arg0: string): void;
	unregister(): void;
}

export default class Team {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Team');
	}

}

