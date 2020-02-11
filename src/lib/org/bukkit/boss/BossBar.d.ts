import BarColor from '../../../org/bukkit/boss/BarColor.js';
import BarFlag from '../../../org/bukkit/boss/BarFlag.js';
import BarStyle from '../../../org/bukkit/boss/BarStyle.js';
import Player from '../../../org/bukkit/entity/Player.js';
export default interface BossBar {
    removeAll(): void;
    addFlag(arg0: BarFlag): void;
    getTitle(): string;
    getColor(): BarColor;
    getPlayers(): Array<Player>;
    setColor(arg0: BarColor): void;
    getStyle(): BarStyle;
    setStyle(arg0: BarStyle): void;
    removeFlag(arg0: BarFlag): void;
    hasFlag(arg0: BarFlag): boolean;
    setProgress(arg0: number): void;
    setTitle(arg0: string): void;
    getProgress(): number;
    addPlayer(arg0: Player): void;
    isVisible(): boolean;
    show(): void;
    hide(): void;
    removePlayer(arg0: Player): void;
    setVisible(arg0: boolean): void;
}
export default class BossBar {
    static get $javaClass(): any;
}
