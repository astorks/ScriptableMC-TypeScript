import File from "./lib/java/io/File.js";
import ScriptablePluginEngine from "./lib/com/pixlfox/scriptablemc/core/ScriptablePluginEngine.js";
import FileUtils from "./lib/org/apache/commons/io/FileUtils.js";
import IOFileFilter from "./lib/org/apache/commons/io/filefilter/IOFileFilter.js";
declare const engine: ScriptablePluginEngine

class MainJsFileFilter implements IOFileFilter {
    accept(file: File): boolean {
        return file.getName() == "main.js";
    }
}

class PluginsFolderFilter implements IOFileFilter {
    accept(file: File): boolean {
        return file.isDirectory();
    }
}

(async () => {
    try {
        // Root folder to search for main.js plugins
        let scriptsFolder = new File("./scripts/plugins");
        let rootScriptsUri = new File("./scripts").getAbsoluteFile().toURI();
        
        let mainPluginFiles = (
            FileUtils.listFiles(
                scriptsFolder,
                new MainJsFileFilter(),
                new PluginsFolderFilter(),
            ).toArray()
        ) as Array<File>;

        for(let i = 0; i < mainPluginFiles.length; i++) {
            let file = mainPluginFiles[i];
            let pluginMainPath = "./" + rootScriptsUri.relativize(file.getAbsoluteFile().toURI()).getPath();
            
            let dynamicPluginType = await import(pluginMainPath);
            let pluginContext = engine.loadPlugin(dynamicPluginType.default);

            console.log("Loaded dynamic js plugin:", pluginContext.getPluginName(), "from", pluginMainPath)
        }

        engine.enableAllPlugins();
    }
    catch(e) {
        console.log(e);
    }
})();