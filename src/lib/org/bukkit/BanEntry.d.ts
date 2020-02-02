export default interface BanEntry {
    save(): void;
    getTarget(): string;
    getExpiration(): any;
    getSource(): string;
    getCreated(): any;
    setCreated(arg0: any): void;
    setSource(arg0: string): void;
    getReason(): string;
    setReason(arg0: string): void;
    setExpiration(arg0: any): void;
}
export default class BanEntry {
    static get $javaClass(): any;
}
