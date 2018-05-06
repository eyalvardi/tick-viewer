import {chain, noop, Rule, Tree} from '@angular-devkit/schematics';
import {addModuleImportToRootModule, getStylesPath} from '../utils/ast';
import {InsertChange} from '../utils/devkit-utils/change';
import {getProjectFromWorkspace, getWorkspace} from '../utils/devkit-utils/config';
import {addHeadLink} from '../utils/html';
import {angularVersion, cdkVersion, materialVersion} from '../utils/lib-versions';
import {addPackageToPackageJson} from '../utils/package';
import {Schema} from './schema';


export default function(options: Schema): Rule {
  return chain([
    options && options.skipPackageJson ? noop() : addToPackageJson(),
    addTickViewerRootConfig(options)
  ]);
}

function addToPackageJson() {
  return (host: Tree) => {
    addPackageToPackageJson(host, 'dependencies', 'tick-viewer', '*');
    return host;
  };
}

function addTickViewerRootConfig(options: Schema) {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);

    addModuleImportToRootModule(
      host,
      'TicksViewerModule',
      'tick-viewer',
      project);

    return host;
  };
}


