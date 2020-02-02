export default interface SerializableAs {
    value(): string;
    annotationType(): any;
}
export default class SerializableAs {
    static get $javaClass(): any;
}
