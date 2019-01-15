'use strict';

const { questions } = require('./text.db');

module.exports.index = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(questions),
  };

  callback(null, response);
};
