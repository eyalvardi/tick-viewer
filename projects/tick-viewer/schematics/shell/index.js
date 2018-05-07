"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const ast_1 = require("../utils/ast");
const config_1 = require("../utils/devkit-utils/config");
const package_1 = require("../utils/package");
function default_1(options) {
    return schematics_1.chain([
        options && options.skipPackageJson ? schematics_1.noop() : addToPackageJson(),
        addTickViewerRootConfig(options)
    ]);
}
exports.default = default_1;
function addToPackageJson() {
    return (host) => {
        package_1.addPackageToPackageJson(host, 'dependencies', 'tick-viewer', '*');
        return host;
    };
}
function addTickViewerRootConfig(options) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = config_1.getProjectFromWorkspace(workspace, options.project);
        ast_1.addModuleImportToRootModule(host, 'TicksViewerModule', 'tick-viewer', project);
        return host;
    };
}
//# sourceMappingURL=index.js.map