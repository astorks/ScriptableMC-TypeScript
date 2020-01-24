declare var Java: any;

export interface BanEntry {
	save(): void;
	getTarget(): string;
	getSource(): string;
	setCreated(created: any): void;
	getExpiration(): any;
	getCreated(): any;
	setSource(source: string): void;
	setExpiration(expiration: any): void;
	getReason(): string;
	setReason(reason: string): void;
}

export class BanEntry {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanEntry');
	}
}

