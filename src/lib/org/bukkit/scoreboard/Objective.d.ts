import DisplaySlot from '../../../org/bukkit/scoreboard/DisplaySlot.js';
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js';
import RenderType from '../../../org/bukkit/scoreboard/RenderType.js';
import Score from '../../../org/bukkit/scoreboard/Score.js';
import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js';
export default interface Objective {
    getName(): string;
    unregister(): void;
    getDisplayName(): string;
    setDisplayName(arg0: string): void;
    getScoreboard(): Scoreboard;
    getCriteria(): string;
    setRenderType(arg0: RenderType): void;
    getScore(arg0: OfflinePlayer): Score;
    getScore(arg0: string): Score;
    getDisplaySlot(): DisplaySlot;
    isModifiable(): boolean;
    setDisplaySlot(arg0: DisplaySlot): void;
    getRenderType(): RenderType;
}
export default class Objective {
    static get $javaClass(): any;
}
