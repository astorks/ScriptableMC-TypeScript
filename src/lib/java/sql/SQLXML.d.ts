export default interface SQLXML {
    getSource(arg0: any): any;
    getString(): string;
    setString(arg0: string): void;
    setBinaryStream(): any;
    setCharacterStream(): any;
    getCharacterStream(): any;
    free(): void;
    getBinaryStream(): any;
    setResult(arg0: any): any;
}
export default class SQLXML {
    static get $javaClass(): any;
}
