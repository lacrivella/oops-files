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
    if(!stats) return callback(err);
    
    callback(err, stats.mtime.toISOString());
  });
};

module.exports = {
  readDirectory,
  rename,
  getModifiedTime
};
