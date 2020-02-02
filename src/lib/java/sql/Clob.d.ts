export default interface Clob {
    length(): number;
    position(arg0: Clob, arg1: number): number;
    position(arg0: string, arg1: number): number;
    truncate(arg0: number): void;
    free(): void;
    setAsciiStream(arg0: number): any;
    setCharacterStream(arg0: number): any;
    setString(arg0: number, arg1: string, arg2: number, arg3: number): number;
    setString(arg0: number, arg1: string): number;
    getAsciiStream(): any;
    getCharacterStream(arg0: number, arg1: number): any;
    getCharacterStream(): any;
    getSubString(arg0: number, arg1: number): string;
}
export default class Clob {
    static get $javaClass(): any;
}
