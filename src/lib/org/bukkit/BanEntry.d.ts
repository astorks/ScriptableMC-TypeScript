export default interface BanEntry {
    save(): void;
    getTarget(): string;
    getExpiration(): any;
    getSource(): string;
    getCreated(): any;
    setSource(arg0: string): void;
    setReason(arg0: string): void;
    setCreated(arg0: any): void;
    setExpiration(arg0: any): void;
    getReason(): string;
}
export default class BanEntry {
    static get $javaClass(): any;
}
