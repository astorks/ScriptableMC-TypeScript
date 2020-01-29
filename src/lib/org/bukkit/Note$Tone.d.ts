export interface Note$Tone {
    getId(sharped: boolean): number;
    getId(): number;
    isSharpable(): boolean;
    isSharped(id: number): boolean;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class Note$Tone {
    static get $javaClass(): any;
    static get G(): Note$Tone;
    static get A(): Note$Tone;
    static get B(): Note$Tone;
    static get C(): Note$Tone;
    static get D(): Note$Tone;
    static get E(): Note$Tone;
    static get F(): Note$Tone;
}
