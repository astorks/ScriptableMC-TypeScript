import { Scoreboard } from '../../../org/bukkit/scoreboard/Scoreboard.js';
import { DisplaySlot } from '../../../org/bukkit/scoreboard/DisplaySlot.js';
import { RenderType } from '../../../org/bukkit/scoreboard/RenderType.js';
import { Score } from '../../../org/bukkit/scoreboard/Score.js';
import { OfflinePlayer } from '../../../org/bukkit/OfflinePlayer.js';
export interface Objective {
    unregister(): void;
    setDisplayName(arg0: string): void;
    getScoreboard(): Scoreboard;
    getCriteria(): string;
    isModifiable(): boolean;
    getDisplaySlot(): DisplaySlot;
    setRenderType(arg0: RenderType): void;
    getRenderType(): RenderType;
    getScore(arg0: OfflinePlayer): Score;
    getScore(arg0: string): Score;
    setDisplaySlot(arg0: DisplaySlot): void;
    getName(): string;
    getDisplayName(): string;
}
export declare class Objective {
    static get $javaClass(): any;
}
