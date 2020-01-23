declare var Java: any;
import {Team$Option} from '../../../org/bukkit/scoreboard/Team$Option.js'
import {Team$OptionStatus} from '../../../org/bukkit/scoreboard/Team$OptionStatus.js'
import {ChatColor} from '../../../org/bukkit/ChatColor.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {NameTagVisibility} from '../../../org/bukkit/scoreboard/NameTagVisibility.js'
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'

export interface Team {
	getName(): string;
	addEntry(entry: string): void;
	getSize(): number;
	getEntries(): any;
	setPrefix(prefix: string): void;
	getPrefix(): string;
	getDisplayName(): string;
	unregister(): void;
	setOption(option: Team$Option, status: Team$OptionStatus): void;
	getOption(option: Team$Option): Team$OptionStatus;
	setDisplayName(displayName: string): void;
	setColor(color: ChatColor): void;
	addPlayer(player: OfflinePlayer): void;
	removePlayer(player: OfflinePlayer): boolean;
	getPlayers(): any;
	getColor(): ChatColor;
	setNameTagVisibility(visibility: NameTagVisibility): void;
	getNameTagVisibility(): NameTagVisibility;
	setCanSeeFriendlyInvisibles(enabled: boolean): void;
	canSeeFriendlyInvisibles(): boolean;
	setAllowFriendlyFire(enabled: boolean): void;
	getScoreboard(): Scoreboard;
	getSuffix(): string;
	hasEntry(entry: string): boolean;
	setSuffix(suffix: string): void;
	hasPlayer(player: OfflinePlayer): boolean;
	allowFriendlyFire(): boolean;
	removeEntry(entry: string): boolean;
}

export class Team {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Team');
	}
}

