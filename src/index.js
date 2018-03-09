import path from 'path';
import fs from 'fs';

function findRootModule(mod) {
  const m = mod || module;
  return ((m.parent && m.id !== m.parent.id) ? findRootModule(m.parent) : m);
}

function findFile(curDir, filename) {
  const fullpath = path.resolve(curDir, filename);
  try {
    if (fs.statSync(fullpath).isFile()) {
      return fullpath;
    }
  }
  catch (e) {
    // not a file
  }

  const par = path.resolve(curDir, '..');
  if (par === curDir) {
    return null;
  }

  return findFile(par, filename);
}

function rootModule(mod) {
  const m = findRootModule(mod);
  const folder = path.dirname(m.filename);
  return {
    module: m,
    folder,
    packageFile: findFile(folder, 'package.json'),
    findFile: findFile.bind(null, folder)
  };
}

module.exports = rootModule;
