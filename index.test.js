const fs = require('fs');
const { createFiles } = require('./index');

describe('create files', () => {
  afterEach(done => {
    fs.readdir('./new-files', { encoding: 'utf8' }, (err, files) => {
      if(files.length === 0) done();
      let deletedSoFar = 0;
      files.forEach(file => {
        fs.unlink(`./new-files/${file}`, () => {
          if(err) return done(err);
          deletedSoFar += 1;
          if(deletedSoFar === files.length) done();
        });
      });
    });
  });

  it('can write a bunch of files with anaimals in them', done => {
    createFiles('./new-files', 10, err => {
      expect(err).toBeFalsy();

      fs.readdir('./new-files', { encoding: 'utf8' }, (err, files) => {
        expect(files).toHaveLength(10);
        done();
      });
    });
  });
});
