'use strict';

const { answers } = require('../api/text.db');
module.exports.index = (event, context, callback) => {
  /* istanbul ignore next */
  const questionId = ((event || {}).pathParameters || {}).id;
  const selectedAnswersArray = answers.filter((answer) => answer.questionId === +questionId);

  if (selectedAnswersArray.length > 0) {
    const response = {
      statusCode: 200,
      body: JSON.stringify(selectedAnswersArray),
    };

    callback(null, response);
  } else {
    const response = {
      statusCode: 404,
      body: JSON.stringify({
        error: `Question ${questionId} not found`,
      }),
    };

    callback(null, response);
  }
};
