import File from "./lib/java/io/File.js";
import ScriptablePluginEngine from "./lib/com/pixlfox/scriptablemc/core/ScriptablePluginEngine.js";
import FileUtils from "./lib/org/apache/commons/io/FileUtils.js";
import IOFileFilter from "./lib/org/apache/commons/io/filefilter/IOFileFilter.js";
declare const engine: ScriptablePluginEngine

const DEBUG_LOGGING = false;

if(engine.getConfig().readConfigBoolean("dynamic_plugins_enabled", false)) {
    (async () => {
        try {
            // Root folder to search for smc.json plugin manifests
            let rootDynamicPluginsFolder = new File("./scripts/dynamic-plugins");
            let rootScriptsUri = new File("./scripts").getAbsoluteFile().toURI();
            
            let pluginManifestFiles = (
                FileUtils.listFiles(
                    rootDynamicPluginsFolder,
                    new MainJsFileFilter(),
                    new PluginsFolderFilter(),
                ).toArray()
            ) as Array<File>;

            for(let i = 0; i < pluginManifestFiles.length; i++) {
                let manifestFile = pluginManifestFiles[i];
                let pluginFolder = manifestFile.getParentFile();
                let manifest = JSON.parse(FileUtils.readFileToString(manifestFile)) as DynamicPluginManifest;
                let pluginMainFile = new File(pluginFolder, manifest.main);

                if(DEBUG_LOGGING) {
                    console.log(JSON.stringify(manifest));
                }

                if(manifest.enabled) {
                    if(pluginMainFile.exists()) {
                        try {
                            console.log("Loading dynamic plugin", manifest.name, "v" + manifest.version, "from", pluginMainFile.getAbsolutePath());
                            
                            let pluginMainPath = "./" + rootScriptsUri.relativize(pluginMainFile.getAbsoluteFile().toURI()).getPath();
                            
                            let dynamicPluginType = await import(pluginMainPath);
                            let pluginContext = engine.loadPlugin(dynamicPluginType.default);

                            console.log("Loaded dynamic plugin", manifest.name, "v" + manifest.version, "from", pluginFolder.getPath());
                        }
                        catch(e) {
                            console.log("Failed to load dynamic plugin", manifest.name, "v" + manifest.version, "from", pluginMainFile.getAbsolutePath());
                            console.log(e);
                        }
                    }
                    else {
                        console.log("Failed to load dynamic plugin", manifest.name, "v" + manifest.version, "from", pluginMainFile.getAbsolutePath());
                        console.log("Main script file not found.");
                    }
                }
                else {
                    console.log("Skipping disabled dynamic plugin", manifest.name, "v" + manifest.version, "from", pluginFolder.getPath());
                }
            }

            engine.enableAllPlugins();
        }
        catch(e) {
            console.log("An internal error occured.");
            console.log(e);
        }
    })();
}

class MainJsFileFilter implements IOFileFilter {
    accept(file: File): boolean {
        return file.getName() == "smc.json";
    }
}

class PluginsFolderFilter implements IOFileFilter {
    accept(file: File): boolean {
        return file.isDirectory();
    }
}

interface DynamicPluginManifest {
    name: string;
    enabled: boolean;
    version: string;
    description: string;
    main: string;
}