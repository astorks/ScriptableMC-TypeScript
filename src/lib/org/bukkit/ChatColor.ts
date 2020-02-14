declare var Java: any;

export default interface ChatColor {
	asBungee(): any;
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getChar(): string;
	getDeclaringClass(): any;
	isColor(): boolean;
	isFormat(): boolean;
	name(): string;
	ordinal(): number;
}

export default class ChatColor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.ChatColor');
	}

	public static get AQUA(): ChatColor {
		return this.$javaClass.AQUA;
	}
	public static get BLACK(): ChatColor {
		return this.$javaClass.BLACK;
	}
	public static get BLUE(): ChatColor {
		return this.$javaClass.BLUE;
	}
	public static get BOLD(): ChatColor {
		return this.$javaClass.BOLD;
	}
	public static get DARK_AQUA(): ChatColor {
		return this.$javaClass.DARK_AQUA;
	}
	public static get DARK_BLUE(): ChatColor {
		return this.$javaClass.DARK_BLUE;
	}
	public static get DARK_GRAY(): ChatColor {
		return this.$javaClass.DARK_GRAY;
	}
	public static get DARK_GREEN(): ChatColor {
		return this.$javaClass.DARK_GREEN;
	}
	public static get DARK_PURPLE(): ChatColor {
		return this.$javaClass.DARK_PURPLE;
	}
	public static get DARK_RED(): ChatColor {
		return this.$javaClass.DARK_RED;
	}
	public static get GOLD(): ChatColor {
		return this.$javaClass.GOLD;
	}
	public static get GRAY(): ChatColor {
		return this.$javaClass.GRAY;
	}
	public static get GREEN(): ChatColor {
		return this.$javaClass.GREEN;
	}
	public static get ITALIC(): ChatColor {
		return this.$javaClass.ITALIC;
	}
	public static get LIGHT_PURPLE(): ChatColor {
		return this.$javaClass.LIGHT_PURPLE;
	}
	public static get MAGIC(): ChatColor {
		return this.$javaClass.MAGIC;
	}
	public static get RED(): ChatColor {
		return this.$javaClass.RED;
	}
	public static get RESET(): ChatColor {
		return this.$javaClass.RESET;
	}
	public static get STRIKETHROUGH(): ChatColor {
		return this.$javaClass.STRIKETHROUGH;
	}
	public static get UNDERLINE(): ChatColor {
		return this.$javaClass.UNDERLINE;
	}
	public static get WHITE(): ChatColor {
		return this.$javaClass.WHITE;
	}
	public static get YELLOW(): ChatColor {
		return this.$javaClass.YELLOW;
	}
}

