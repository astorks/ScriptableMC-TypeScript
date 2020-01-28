export interface ChatColor {
    isColor(): boolean;
    isFormat(): boolean;
    asBungee(): any;
    getChar(): string;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class ChatColor {
    static get $javaClass(): any;
    static get BLACK(): ChatColor;
    static get DARK_BLUE(): ChatColor;
    static get DARK_GREEN(): ChatColor;
    static get DARK_AQUA(): ChatColor;
    static get DARK_RED(): ChatColor;
    static get DARK_PURPLE(): ChatColor;
    static get GOLD(): ChatColor;
    static get GRAY(): ChatColor;
    static get DARK_GRAY(): ChatColor;
    static get BLUE(): ChatColor;
    static get GREEN(): ChatColor;
    static get AQUA(): ChatColor;
    static get RED(): ChatColor;
    static get LIGHT_PURPLE(): ChatColor;
    static get YELLOW(): ChatColor;
    static get WHITE(): ChatColor;
    static get MAGIC(): ChatColor;
    static get BOLD(): ChatColor;
    static get STRIKETHROUGH(): ChatColor;
    static get UNDERLINE(): ChatColor;
    static get ITALIC(): ChatColor;
    static get RESET(): ChatColor;
}
