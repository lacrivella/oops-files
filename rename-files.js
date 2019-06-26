const fs = require('fs');

const readDirectory = (directory, callback) => {
  fs.readdir(directory, (err, files) => {
    callback(err, files);
  });
};

const rename = (path, newPath, callback) => {
  fs.rename(path, newPath, err => {
    callback(err);
  });
};

const getModifiedTime = (path, callback) => {
  fs.stat(path, (err, stats) => {
    callback(err, stats && stats.mtime.toISOString());
  });
};

const readFile = (path, callback) => {
  fs.readFile(path, { encoding: 'utf8' }, (err, file) => {
    callback(err, file);
  });
};

const readEverything = (directory, callback) => {
  readDirectory(directory, (err, files) => {
    if(err) return callback(err);

    files.forEach(file => {
      let renamedSoFar = 0;
      readFile(`${directory}/${file}`, (err, fileContent) => {
        if(err) return callback(err);
        getModifiedTime(`${directory}/${file}`, (err, modifiedTime) => {
          if(err) return callback(err);
          const number = file.split('.')[0];
          rename(`${directory}/${file}`, `${directory}/${fileContent}-${number}-${modifiedTime}`)
      })
      })
    })
  })
}
module.exports = {
  readDirectory,
  rename,
  getModifiedTime,
  readFile,
  readEverything
};
