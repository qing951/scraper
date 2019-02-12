var fs = require('fs');
var path = require('path');
export default createDb;
var sql = require('sql.js');
// const fs = require('fs');

var db = new sql.Database();

function createDb() {
  let sqlstr = 'CREATE TABLE movies (id int, name text, img text, path text);';
  sqlstr += 'CREATE TABLE favorites (fid int, name text, value array);';

  db.run(sqlstr);
  let buffer = new Buffer(db.export());

  fs.writeFile(path.join(__dirname, './data.sqlite'), buffer, () => {
    console.log('database done');
  });

  return db;
}
