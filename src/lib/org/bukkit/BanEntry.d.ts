export interface BanEntry {
    getSource(): string;
    getExpiration(): any;
    getCreated(): any;
    setReason(arg0: string): void;
    getReason(): string;
    setSource(arg0: string): void;
    setCreated(arg0: any): void;
    setExpiration(arg0: any): void;
    save(): void;
    getTarget(): string;
}
export declare class BanEntry {
    static get $javaClass(): any;
}
