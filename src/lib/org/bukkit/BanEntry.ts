declare var Java: any;

export interface BanEntry {
	getExpiration(): any;
	getSource(): string;
	getCreated(): any;
	setCreated(arg0: any): void;
	setSource(arg0: string): void;
	setExpiration(arg0: any): void;
	getReason(): string;
	setReason(arg0: string): void;
	save(): void;
	getTarget(): string;
}

export class BanEntry {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanEntry');
	}
}

