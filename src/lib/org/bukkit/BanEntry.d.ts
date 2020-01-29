export interface BanEntry {
    save(): void;
    getTarget(): string;
    getExpiration(): any;
    getSource(): string;
    setExpiration(arg0: any): void;
    setSource(arg0: string): void;
    setCreated(arg0: any): void;
    getReason(): string;
    setReason(arg0: string): void;
    getCreated(): any;
}
export declare class BanEntry {
    static get $javaClass(): any;
}
