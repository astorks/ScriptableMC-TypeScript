import BarColor from '../../../org/bukkit/boss/BarColor.js';
import BarFlag from '../../../org/bukkit/boss/BarFlag.js';
import BarStyle from '../../../org/bukkit/boss/BarStyle.js';
import BossBar from '../../../org/bukkit/boss/BossBar.js';
import Keyed from '../../../org/bukkit/Keyed.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import Player from '../../../org/bukkit/entity/Player.js';
export default interface KeyedBossBar extends BossBar, Keyed {
    removeAll(): void;
    addFlag(arg0: BarFlag): void;
    getPlayers(): any;
    getTitle(): string;
    setTitle(arg0: string): void;
    setColor(arg0: BarColor): void;
    getColor(): BarColor;
    setStyle(arg0: BarStyle): void;
    getStyle(): BarStyle;
    removeFlag(arg0: BarFlag): void;
    hide(): void;
    isVisible(): boolean;
    addPlayer(arg0: Player): void;
    removePlayer(arg0: Player): void;
    hasFlag(arg0: BarFlag): boolean;
    setProgress(arg0: number): void;
    getProgress(): number;
    setVisible(arg0: boolean): void;
    show(): void;
    getKey(): NamespacedKey;
}
export default class KeyedBossBar {
    static get $javaClass(): any;
}
