const fs = require('fs');
const { createFiles } = require('./index');
const { readDirectory, rename, getModifiedTime } = require('./rename-files');

describe('rename functions', () => {
  beforeEach(done => {
    createFiles('./new-files', 10, done);
  });

  afterEach(done => {
    // read all files in a directory
    fs.readdir('./new-files', (err, files) => {
      if(files.length === 0) done();
      let deletedSoFar = 0;
      // [0.txt, 1.txt, 2.txt, ...]
      // for each file
      files.forEach(file => {
        // delete it
        fs.unlink(`./new-files/${file}`, err => {
          if(err) return done(err);
          deletedSoFar += 1;
          if(deletedSoFar === files.length) done();
        });
      });
    });
  });

  it('gets all files in target directory', done => {
    readDirectory('./new-files', (err, files) => {
      expect(files).toHaveLength(10);
      done();
    });
  });

  it('can rename a file given a path and new path', done => {
    fs.readFile('./new-files/0.txt', { encoding: 'utf8' }, (err, oldFileContent) => {
      rename('./new-files/0.txt', './new-files/new-name.txt', err => {
        expect(err).toBeFalsy();

        fs.readFile('./new-files/new-name.txt', { encoding: 'utf8' }, (err, newFileContent) => {
          expect(err).toBeFalsy();

          expect(newFileContent).toEqual(oldFileContent);
          done();
        });
      });
    });
  });

  it('last modified file', done => {
    getModifiedTime('./new-files/0.txt', (err, modifiedTime) => {
      expect(err).toBeFalsy();

      expect(modifiedTime).toEqual(expect.any(String));
      done();
    });
  });
});