import ChatColor from '../../../org/bukkit/ChatColor.js';
import NameTagVisibility from '../../../org/bukkit/scoreboard/NameTagVisibility.js';
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js';
import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js';
import Team$Option from '../../../org/bukkit/scoreboard/Team$Option.js';
import Team$OptionStatus from '../../../org/bukkit/scoreboard/Team$OptionStatus.js';
export default interface Team {
    getName(): string;
    addEntry(arg0: string): void;
    getSize(): number;
    getEntries(): any;
    getDisplayName(): string;
    unregister(): void;
    getScoreboard(): Scoreboard;
    setDisplayName(arg0: string): void;
    getPrefix(): string;
    getColor(): ChatColor;
    getPlayers(): any;
    setColor(arg0: ChatColor): void;
    addPlayer(arg0: OfflinePlayer): void;
    removePlayer(arg0: OfflinePlayer): boolean;
    getNameTagVisibility(): NameTagVisibility;
    setNameTagVisibility(arg0: NameTagVisibility): void;
    canSeeFriendlyInvisibles(): boolean;
    setAllowFriendlyFire(arg0: boolean): void;
    setCanSeeFriendlyInvisibles(arg0: boolean): void;
    setPrefix(arg0: string): void;
    allowFriendlyFire(): boolean;
    getOption(arg0: Team$Option): Team$OptionStatus;
    setSuffix(arg0: string): void;
    removeEntry(arg0: string): boolean;
    setOption(arg0: Team$Option, arg1: Team$OptionStatus): void;
    getSuffix(): string;
    hasEntry(arg0: string): boolean;
    hasPlayer(arg0: OfflinePlayer): boolean;
}
export default class Team {
    static get $javaClass(): any;
}
