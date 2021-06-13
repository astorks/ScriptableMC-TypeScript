declare var Java: any;

export default interface ChatColor {
	getColor(): any;
	getName(): string;
	name(): string;
	ordinal(): number;
}

export default class ChatColor {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.ChatColor');
	}

	public static get ALL_CODES(): string {
		return ChatColor.$javaClass.ALL_CODES;
	}

	public static get AQUA(): ChatColor {
		return ChatColor.$javaClass.AQUA;
	}

	public static get BLACK(): ChatColor {
		return ChatColor.$javaClass.BLACK;
	}

	public static get BLUE(): ChatColor {
		return ChatColor.$javaClass.BLUE;
	}

	public static get BOLD(): ChatColor {
		return ChatColor.$javaClass.BOLD;
	}

	public static get COLOR_CHAR(): string {
		return ChatColor.$javaClass.COLOR_CHAR;
	}

	public static get DARK_AQUA(): ChatColor {
		return ChatColor.$javaClass.DARK_AQUA;
	}

	public static get DARK_BLUE(): ChatColor {
		return ChatColor.$javaClass.DARK_BLUE;
	}

	public static get DARK_GRAY(): ChatColor {
		return ChatColor.$javaClass.DARK_GRAY;
	}

	public static get DARK_GREEN(): ChatColor {
		return ChatColor.$javaClass.DARK_GREEN;
	}

	public static get DARK_PURPLE(): ChatColor {
		return ChatColor.$javaClass.DARK_PURPLE;
	}

	public static get DARK_RED(): ChatColor {
		return ChatColor.$javaClass.DARK_RED;
	}

	public static get GOLD(): ChatColor {
		return ChatColor.$javaClass.GOLD;
	}

	public static get GRAY(): ChatColor {
		return ChatColor.$javaClass.GRAY;
	}

	public static get GREEN(): ChatColor {
		return ChatColor.$javaClass.GREEN;
	}

	public static get ITALIC(): ChatColor {
		return ChatColor.$javaClass.ITALIC;
	}

	public static get LIGHT_PURPLE(): ChatColor {
		return ChatColor.$javaClass.LIGHT_PURPLE;
	}

	public static get MAGIC(): ChatColor {
		return ChatColor.$javaClass.MAGIC;
	}

	public static get RED(): ChatColor {
		return ChatColor.$javaClass.RED;
	}

	public static get RESET(): ChatColor {
		return ChatColor.$javaClass.RESET;
	}

	public static get STRIKETHROUGH(): ChatColor {
		return ChatColor.$javaClass.STRIKETHROUGH;
	}

	public static get STRIP_COLOR_PATTERN(): any {
		return ChatColor.$javaClass.STRIP_COLOR_PATTERN;
	}

	public static get UNDERLINE(): ChatColor {
		return ChatColor.$javaClass.UNDERLINE;
	}

	public static get WHITE(): ChatColor {
		return ChatColor.$javaClass.WHITE;
	}

	public static get YELLOW(): ChatColor {
		return ChatColor.$javaClass.YELLOW;
	}

	public static getByChar(code: string): ChatColor;
	public static getByChar(...args: any[]): any {
		return ChatColor.$javaClass.getByChar(...args);
	}

	public static of(color: any): ChatColor;
	public static of(string: string): ChatColor;
	public static of(...args: any[]): any {
		return ChatColor.$javaClass.of(...args);
	}

	public static stripColor(input: string): string;
	public static stripColor(...args: any[]): any {
		return ChatColor.$javaClass.stripColor(...args);
	}

	public static translateAlternateColorCodes(altColorChar: string, textToTranslate: string): string;
	public static translateAlternateColorCodes(...args: any[]): any {
		return ChatColor.$javaClass.translateAlternateColorCodes(...args);
	}

	public static valueOf(_name: string): ChatColor;
	public static valueOf(...args: any[]): any {
		return ChatColor.$javaClass.valueOf(...args);
	}

	public static values(): Array<ChatColor>;
	public static values(...args: any[]): any {
		return ChatColor.$javaClass.values(...args);
	}

}

