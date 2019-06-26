const fs = require('fs');
const { createFiles } = require('./index');

describe ('create files', () => {
  it('can get a random animal', () => { 
    const animal = createFiles();
    expect(animal).toEqual(expect.any(String));
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
