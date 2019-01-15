'use strict';

const { questions } = require('../api/text.db');

module.exports.index = (event, context, callback) => {
  /* istanbul ignore next */
  const questionId = ((event || {}).pathParameters || {}).id;
  const selectedQuestionArray = questions.filter((question) => question.id === +questionId);

  if (selectedQuestionArray.length === 1) {
    const response = {
      statusCode: 200,
      body: JSON.stringify(selectedQuestionArray[0]),
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
