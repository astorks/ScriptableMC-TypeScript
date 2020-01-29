export class ItemTagType {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.tags.ItemTagType');
    }
    static get BYTE() {
        return ItemTagType.$javaClass.BYTE;
    }
    static get SHORT() {
        return ItemTagType.$javaClass.SHORT;
    }
    static get INTEGER() {
        return ItemTagType.$javaClass.INTEGER;
    }
    static get LONG() {
        return ItemTagType.$javaClass.LONG;
    }
    static get FLOAT() {
        return ItemTagType.$javaClass.FLOAT;
    }
    static get DOUBLE() {
        return ItemTagType.$javaClass.DOUBLE;
    }
    static get STRING() {
        return ItemTagType.$javaClass.STRING;
    }
    static get BYTE_ARRAY() {
        return ItemTagType.$javaClass.BYTE_ARRAY;
    }
    static get INTEGER_ARRAY() {
        return ItemTagType.$javaClass.INTEGER_ARRAY;
    }
    static get LONG_ARRAY() {
        return ItemTagType.$javaClass.LONG_ARRAY;
    }
    static get TAG_CONTAINER() {
        return ItemTagType.$javaClass.TAG_CONTAINER;
    }
}
