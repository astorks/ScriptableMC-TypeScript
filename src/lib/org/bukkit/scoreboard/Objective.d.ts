import DisplaySlot from '../../../org/bukkit/scoreboard/DisplaySlot.js';
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js';
import RenderType from '../../../org/bukkit/scoreboard/RenderType.js';
import Score from '../../../org/bukkit/scoreboard/Score.js';
import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js';
export default interface Objective {
    getName(): string;
    getDisplayName(): string;
    unregister(): void;
    getScoreboard(): Scoreboard;
    setDisplayName(arg0: string): void;
    getCriteria(): string;
    isModifiable(): boolean;
    setDisplaySlot(arg0: DisplaySlot): void;
    getScore(arg0: OfflinePlayer): Score;
    getScore(arg0: string): Score;
    getDisplaySlot(): DisplaySlot;
    setRenderType(arg0: RenderType): void;
    getRenderType(): RenderType;
}
export default class Objective {
    static get $javaClass(): any;
}
