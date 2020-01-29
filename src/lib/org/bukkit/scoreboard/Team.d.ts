import { Scoreboard } from '../../../org/bukkit/scoreboard/Scoreboard.js';
import { ChatColor } from '../../../org/bukkit/ChatColor.js';
import { OfflinePlayer } from '../../../org/bukkit/OfflinePlayer.js';
import { NameTagVisibility } from '../../../org/bukkit/scoreboard/NameTagVisibility.js';
import { Team$Option } from '../../../org/bukkit/scoreboard/Team$Option.js';
import { Team$OptionStatus } from '../../../org/bukkit/scoreboard/Team$OptionStatus.js';
export interface Team {
    getName(): string;
    addEntry(arg0: string): void;
    getSize(): number;
    getEntries(): any;
    unregister(): void;
    getDisplayName(): string;
    setDisplayName(arg0: string): void;
    getScoreboard(): Scoreboard;
    getPrefix(): string;
    getColor(): ChatColor;
    getPlayers(): any;
    removePlayer(arg0: OfflinePlayer): boolean;
    addPlayer(arg0: OfflinePlayer): void;
    setColor(arg0: ChatColor): void;
    setAllowFriendlyFire(arg0: boolean): void;
    canSeeFriendlyInvisibles(): boolean;
    setCanSeeFriendlyInvisibles(arg0: boolean): void;
    getNameTagVisibility(): NameTagVisibility;
    setNameTagVisibility(arg0: NameTagVisibility): void;
    setPrefix(arg0: string): void;
    hasEntry(arg0: string): boolean;
    removeEntry(arg0: string): boolean;
    getSuffix(): string;
    setSuffix(arg0: string): void;
    allowFriendlyFire(): boolean;
    hasPlayer(arg0: OfflinePlayer): boolean;
    setOption(arg0: Team$Option, arg1: Team$OptionStatus): void;
    getOption(arg0: Team$Option): Team$OptionStatus;
}
export declare class Team {
    static get $javaClass(): any;
}
