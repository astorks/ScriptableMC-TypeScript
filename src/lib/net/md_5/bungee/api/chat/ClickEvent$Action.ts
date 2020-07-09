declare var Java: any;

export default interface ClickEvent$Action {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class ClickEvent$Action {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.ClickEvent$Action');
	}

	public static get CHANGE_PAGE(): ClickEvent$Action {
		return this.$javaClass.CHANGE_PAGE;
	}
	public static get COPY_TO_CLIPBOARD(): ClickEvent$Action {
		return this.$javaClass.COPY_TO_CLIPBOARD;
	}
	public static get OPEN_FILE(): ClickEvent$Action {
		return this.$javaClass.OPEN_FILE;
	}
	public static get OPEN_URL(): ClickEvent$Action {
		return this.$javaClass.OPEN_URL;
	}
	public static get RUN_COMMAND(): ClickEvent$Action {
		return this.$javaClass.RUN_COMMAND;
	}
	public static get SUGGEST_COMMAND(): ClickEvent$Action {
		return this.$javaClass.SUGGEST_COMMAND;
	}
}

