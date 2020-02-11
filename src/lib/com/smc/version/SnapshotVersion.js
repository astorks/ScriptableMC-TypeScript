export default class SnapshotVersion {
    static get $javaClass() {
        return Java.type('com.smc.version.SnapshotVersion');
    }
    static get COMPARATOR() {
        return SnapshotVersion.$javaClass.COMPARATOR;
    }
    static parse(...args) {
        return SnapshotVersion.$javaClass.parse(...args);
    }
}
