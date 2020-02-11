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
    unregister(): void;
    getDisplayName(): string;
    setDisplayName(arg0: string): void;
    getScoreboard(): Scoreboard;
    getPrefix(): string;
    getColor(): ChatColor;
    getPlayers(): any;
    addPlayer(arg0: OfflinePlayer): void;
    setColor(arg0: ChatColor): void;
    removePlayer(arg0: OfflinePlayer): boolean;
    setPrefix(arg0: string): void;
    removeEntry(arg0: string): boolean;
    hasEntry(arg0: string): boolean;
    hasPlayer(arg0: OfflinePlayer): boolean;
    getSuffix(): string;
    setOption(arg0: Team$Option, arg1: Team$OptionStatus): void;
    getOption(arg0: Team$Option): Team$OptionStatus;
    setSuffix(arg0: string): void;
    allowFriendlyFire(): boolean;
    setAllowFriendlyFire(arg0: boolean): void;
    canSeeFriendlyInvisibles(): boolean;
    getNameTagVisibility(): NameTagVisibility;
    setNameTagVisibility(arg0: NameTagVisibility): void;
    setCanSeeFriendlyInvisibles(arg0: boolean): void;
}
export default class Team {
    static get $javaClass(): any;
}
