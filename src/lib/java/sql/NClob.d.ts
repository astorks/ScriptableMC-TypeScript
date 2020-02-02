import Clob from '../../java/sql/Clob.js';
export default interface NClob {
    setString(arg0: number, arg1: string): number;
    setString(arg0: number, arg1: string, arg2: number, arg3: number): number;
    setAsciiStream(arg0: number): any;
    setCharacterStream(arg0: number): any;
    getCharacterStream(arg0: number, arg1: number): any;
    getCharacterStream(): any;
    getSubString(arg0: number, arg1: number): string;
    getAsciiStream(): any;
    free(): void;
    length(): number;
    position(arg0: string, arg1: number): number;
    position(arg0: Clob, arg1: number): number;
    truncate(arg0: number): void;
}
export default class NClob {
    static get $javaClass(): any;
}
