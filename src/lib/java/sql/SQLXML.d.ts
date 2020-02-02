export default interface SQLXML {
    free(): void;
    getString(): string;
    setResult(arg0: any): any;
    getSource(arg0: any): any;
    setCharacterStream(): any;
    setBinaryStream(): any;
    setString(arg0: string): void;
    getCharacterStream(): any;
    getBinaryStream(): any;
}
export default class SQLXML {
    static get $javaClass(): any;
}
