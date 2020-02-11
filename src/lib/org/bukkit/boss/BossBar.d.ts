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
    getStyle(): BarStyle;
    setTitle(arg0: string): void;
    hasFlag(arg0: BarFlag): boolean;
    setVisible(arg0: boolean): void;
    hide(): void;
    addPlayer(arg0: Player): void;
    setColor(arg0: BarColor): void;
    removePlayer(arg0: Player): void;
    show(): void;
    setStyle(arg0: BarStyle): void;
    removeFlag(arg0: BarFlag): void;
    getProgress(): number;
    isVisible(): boolean;
    setProgress(arg0: number): void;
}
export default class BossBar {
    static get $javaClass(): any;
}
