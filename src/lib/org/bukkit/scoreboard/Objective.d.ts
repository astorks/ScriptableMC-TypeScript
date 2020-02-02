import DisplaySlot from '../../../org/bukkit/scoreboard/DisplaySlot.js';
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js';
import RenderType from '../../../org/bukkit/scoreboard/RenderType.js';
import Score from '../../../org/bukkit/scoreboard/Score.js';
import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js';
export default interface Objective {
    unregister(): void;
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
    getName(): string;
    getDisplayName(): string;
}
export default class Objective {
    static get $javaClass(): any;
}
