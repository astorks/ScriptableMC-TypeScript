declare var Java: any;
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {ChatColor} from '../../../org/bukkit/ChatColor.js'
import {NameTagVisibility} from '../../../org/bukkit/scoreboard/NameTagVisibility.js'
import {Team$OptionStatus} from '../../../org/bukkit/scoreboard/Team$OptionStatus.js'
import {Team$Option} from '../../../org/bukkit/scoreboard/Team$Option.js'

export interface Team {
	unregister(): void;
	getScoreboard(): Scoreboard;
	setDisplayName(arg0: string): void;
	getPlayers(): any;
	addPlayer(arg0: OfflinePlayer): void;
	removePlayer(arg0: OfflinePlayer): boolean;
	getColor(): ChatColor;
	setColor(arg0: ChatColor): void;
	getPrefix(): string;
	setPrefix(arg0: string): void;
	setSuffix(arg0: string): void;
	allowFriendlyFire(): boolean;
	setAllowFriendlyFire(arg0: boolean): void;
	canSeeFriendlyInvisibles(): boolean;
	setCanSeeFriendlyInvisibles(arg0: boolean): void;
	getNameTagVisibility(): NameTagVisibility;
	setNameTagVisibility(arg0: NameTagVisibility): void;
	hasPlayer(arg0: OfflinePlayer): boolean;
	hasEntry(arg0: string): boolean;
	getOption(arg0: Team$Option): Team$OptionStatus;
	setOption(arg0: Team$Option, arg1: Team$OptionStatus): void;
	getSuffix(): string;
	getName(): string;
	addEntry(arg0: string): void;
	getSize(): number;
	getEntries(): any;
	removeEntry(arg0: string): boolean;
	getDisplayName(): string;
}

export class Team {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Team');
	}
}

