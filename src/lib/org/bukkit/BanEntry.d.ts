export default interface BanEntry {
    save(): void;
    getTarget(): string;
    getExpiration(): any;
    getSource(): string;
    getCreated(): any;
    setExpiration(arg0: any): void;
    setReason(arg0: string): void;
    setCreated(arg0: any): void;
    setSource(arg0: string): void;
    getReason(): string;
}
export default class BanEntry {
    static get $javaClass(): any;
}
