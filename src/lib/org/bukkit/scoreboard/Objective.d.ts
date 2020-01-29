import { Scoreboard } from '../../../org/bukkit/scoreboard/Scoreboard.js';
import { DisplaySlot } from '../../../org/bukkit/scoreboard/DisplaySlot.js';
import { RenderType } from '../../../org/bukkit/scoreboard/RenderType.js';
import { Score } from '../../../org/bukkit/scoreboard/Score.js';
import { OfflinePlayer } from '../../../org/bukkit/OfflinePlayer.js';
export interface Objective {
    getName(): string;
    unregister(): void;
    getDisplayName(): string;
    setDisplayName(arg0: string): void;
    getScoreboard(): Scoreboard;
    getCriteria(): string;
    setDisplaySlot(arg0: DisplaySlot): void;
    getDisplaySlot(): DisplaySlot;
    setRenderType(arg0: RenderType): void;
    isModifiable(): boolean;
    getRenderType(): RenderType;
    getScore(arg0: OfflinePlayer): Score;
    getScore(arg0: string): Score;
}
export declare class Objective {
    static get $javaClass(): any;
}
