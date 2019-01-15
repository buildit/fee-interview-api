'use strict';

const { answers } = require('./text.db');

module.exports.index = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(answers),
  };

  callback(null, response);
};
