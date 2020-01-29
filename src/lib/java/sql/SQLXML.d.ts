export interface SQLXML {
    getString(): string;
    free(): void;
    setResult(arg0: any): any;
    getSource(arg0: any): any;
    setString(arg0: string): void;
    setBinaryStream(): any;
    setCharacterStream(): any;
    getBinaryStream(): any;
    getCharacterStream(): any;
}
export declare class SQLXML {
    static get $javaClass(): any;
}
