const _ = require('cleaner-node');
const parser = require('./parser');

const parse = async (opts) => {

  if (!opts?.path) {
    throw new Error("Invalid path");
  }

  const json = await parser.parse({
    path: opts.path,
    options: {
      password: _.trimToUndefined(opts.password) 
    }
  });

  return json;

};

module.exports = {
  parse
};