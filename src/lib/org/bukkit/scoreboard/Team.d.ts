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
    getPlayers(): any;
    getScoreboard(): Scoreboard;
    setDisplayName(arg0: string): void;
    setColor(arg0: ChatColor): void;
    getPrefix(): string;
    getColor(): ChatColor;
    addPlayer(arg0: OfflinePlayer): void;
    removePlayer(arg0: OfflinePlayer): boolean;
    setPrefix(arg0: string): void;
    allowFriendlyFire(): boolean;
    hasEntry(arg0: string): boolean;
    removeEntry(arg0: string): boolean;
    getOption(arg0: Team$Option): Team$OptionStatus;
    setOption(arg0: Team$Option, arg1: Team$OptionStatus): void;
    getSuffix(): string;
    setSuffix(arg0: string): void;
    hasPlayer(arg0: OfflinePlayer): boolean;
    canSeeFriendlyInvisibles(): boolean;
    setCanSeeFriendlyInvisibles(arg0: boolean): void;
    getNameTagVisibility(): NameTagVisibility;
    setNameTagVisibility(arg0: NameTagVisibility): void;
    setAllowFriendlyFire(arg0: boolean): void;
}
export default class Team {
    static get $javaClass(): any;
}
