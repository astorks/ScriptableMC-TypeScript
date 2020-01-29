import { BarFlag } from '../../../org/bukkit/boss/BarFlag.js';
import { BarColor } from '../../../org/bukkit/boss/BarColor.js';
import { Player } from '../../../org/bukkit/entity/Player.js';
import { BarStyle } from '../../../org/bukkit/boss/BarStyle.js';
import { NamespacedKey } from '../../../org/bukkit/NamespacedKey.js';
import { BossBar } from '../../../org/bukkit/boss/BossBar.js';
import { Keyed } from '../../../org/bukkit/Keyed.js';
export interface KeyedBossBar extends BossBar, Keyed {
    removeAll(): void;
    addFlag(arg0: BarFlag): void;
    getTitle(): string;
    getColor(): BarColor;
    getPlayers(): any;
    hasFlag(arg0: BarFlag): boolean;
    setVisible(arg0: boolean): void;
    removePlayer(arg0: Player): void;
    show(): void;
    removeFlag(arg0: BarFlag): void;
    setStyle(arg0: BarStyle): void;
    addPlayer(arg0: Player): void;
    hide(): void;
    setTitle(arg0: string): void;
    setProgress(arg0: number): void;
    getProgress(): number;
    isVisible(): boolean;
    getStyle(): BarStyle;
    setColor(arg0: BarColor): void;
    getKey(): NamespacedKey;
}
export declare class KeyedBossBar {
    static get $javaClass(): any;
}
