export default interface BanEntry {
    getSource(): string;
    getExpiration(): any;
    getCreated(): any;
    setCreated(arg0: any): void;
    setSource(arg0: string): void;
    setExpiration(arg0: any): void;
    getReason(): string;
    setReason(arg0: string): void;
    save(): void;
    getTarget(): string;
}
export default class BanEntry {
    static get $javaClass(): any;
}
