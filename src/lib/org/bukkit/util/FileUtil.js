export default class FileUtil {
    static get $javaClass() {
        return Java.type('org.bukkit.util.FileUtil');
    }
    constructor(...args) {
        return new FileUtil.$javaClass(...args);
    }
    static copy(...args) {
        return FileUtil.$javaClass.copy(...args);
    }
}
