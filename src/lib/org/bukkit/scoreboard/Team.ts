declare var Java: any;
import {Team$Option} from '../../../org/bukkit/scoreboard/Team$Option.js'
import {Team$OptionStatus} from '../../../org/bukkit/scoreboard/Team$OptionStatus.js'
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {ChatColor} from '../../../org/bukkit/ChatColor.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {NameTagVisibility} from '../../../org/bukkit/scoreboard/NameTagVisibility.js'

export interface Team {
	getName(): string;
	addEntry(entry: string): void;
	getSize(): number;
	getEntries(): any;
	unregister(): void;
	setOption(option: Team$Option, status: Team$OptionStatus): void;
	getOption(option: Team$Option): Team$OptionStatus;
	setPrefix(prefix: string): void;
	getPrefix(): string;
	getDisplayName(): string;
	getScoreboard(): Scoreboard;
	setDisplayName(displayName: string): void;
	getColor(): ChatColor;
	setColor(color: ChatColor): void;
	getPlayers(): any;
	allowFriendlyFire(): boolean;
	getSuffix(): string;
	removeEntry(entry: string): boolean;
	setSuffix(suffix: string): void;
	hasPlayer(player: OfflinePlayer): boolean;
	hasEntry(entry: string): boolean;
	addPlayer(player: OfflinePlayer): void;
	removePlayer(player: OfflinePlayer): boolean;
	setAllowFriendlyFire(enabled: boolean): void;
	getNameTagVisibility(): NameTagVisibility;
	setNameTagVisibility(visibility: NameTagVisibility): void;
	setCanSeeFriendlyInvisibles(enabled: boolean): void;
	canSeeFriendlyInvisibles(): boolean;
}

export class Team {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Team');
	}
}

