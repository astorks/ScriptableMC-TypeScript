declare var Java: any;

export default class StringUtil {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.StringUtil');
	}

	constructor();
	constructor(...args: any[]) {
		return new StringUtil.$javaClass(...args);
	}

	public static copyPartialMatches(token: string, originals: any, collection: any): any;
	public static copyPartialMatches(...args: any[]): any {
		return StringUtil.$javaClass.copyPartialMatches(...args);
	}

	public static startsWithIgnoreCase(string: string, prefix: string): boolean;
	public static startsWithIgnoreCase(...args: any[]): any {
		return StringUtil.$javaClass.startsWithIgnoreCase(...args);
	}

}

